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

  it('should renew the budgets of all fathers', async () => {
    // setup data
    const father = {budget: 100, newBudget: 666}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)

    // call action
    await natsEx.call('action.main.renew-fathers-budgets')

    // check
    const newFather = await fatherColl.findOne({_id: fatherId})
    expect(newFather.budget).toBe(666)
  })
})
