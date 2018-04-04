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

  it('should request an amount of budget from the father', async () => {
    // setup data
    const father = {budget: 100}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const amount = 66

    // call action
    const allocation = await natsEx.call('action.main.request-budget', {fatherId: fatherId.toString(), amount})

    // check
    expect(allocation).toBe(66)
  })

  it('should only get remaining budget', async () => {
    // setup data
    const father = {budget: 66}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const amount = 100

    // call action
    const allocation = await natsEx.call('action.main.request-budget', {fatherId: fatherId.toString(), amount})

    // check
    expect(allocation).toBe(66)
  })
})

