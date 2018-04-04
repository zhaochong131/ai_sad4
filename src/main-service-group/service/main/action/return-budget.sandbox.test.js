describe(__filename, () => {
  let natsEx = null
  let mongoClient = null
  let fatherColl = null

  beforeAll(async () => {
    natsEx = await require('nats-ex').connect()
    mongoClient = await require('mongodb').MongoClient.connect('mongodb://localhost:27017')
    fatherColl = mongoClient.db('test').collection('fathers')
  })

  afterAll(() => {
    return Promise.all([
      natsEx.close(),
      mongoClient.close(true)
    ])
  })

  it('should return an amount of budget to the father', async () => {
    // setup data
    const father = {budget: 100}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const amount = 66

    // call action
    await natsEx.call('action.main.return-budget', {fatherId: fatherId.toString(), amount})

    // check
    const fatherAfterAction = await fatherColl.findOne({_id: fatherId})
    expect(fatherAfterAction.budget).toBe(166)
  })
})
