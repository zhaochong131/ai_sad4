const uuid = require('uuid')

describe(__filename, () => {
  let natsEx = null
  let mongoClient = null
  let adColl = null

  beforeAll(async () => {
    natsEx = await require('nats-ex').connect()

    mongoClient = await require('mongodb').MongoClient.connect('mongodb://localhost:27017')
    adColl = mongoClient.db('test').collection('ads')
  })

  afterAll(() => {
    return Promise.all([
      natsEx.close(),
      mongoClient.close(true)
    ])
  })

  it('should update ad effectiveStatus in adColl', async () => {
    const adId = uuid.v4()
    await adColl.insertOne({_id: adId, spend: 0})
    await natsEx.call('action.ad.update-effective-status', {
      adId: adId,
      effectiveStatus: 'DELETED'
    })
    const {effectiveStatus, updatedAt} = await adColl.findOne({_id: adId})
    expect(effectiveStatus).toBe('DELETED')
    expect(new Date() - updatedAt).toBeLessThan(1000)
  })
})
