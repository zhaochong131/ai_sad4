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
      mongoClient.close(true),
    ])
  })

  it('should insert one ad doc in adColl', async () => {
    const adId = uuid.v4()
    await natsEx.call('action.ad.insert',
      {
        _id: adId,
        adsetId: 'adsetId',
        campaignId: 'campaignId',
        effectiveStatus: 'ACTIVE'
      }
    )
    const {adsetId, campaignId, effectiveStatus, createdAt} = await adColl.findOne({_id: adId})
    expect(adsetId).toBe('adsetId')
    expect(campaignId).toBe('campaignId')
    expect(effectiveStatus).toBe('ACTIVE')
    expect(new Date() - createdAt).toBeLessThan(1000)
  })
})
