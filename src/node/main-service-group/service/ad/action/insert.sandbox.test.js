const Holder = require('the-holder')
const filterDefs = require('n3h-filter-items')
const uuid = require('uuid')
const allDefs = require('../../../lib/item-definitions')
const adapters = require('../../../lib/item-adapters')

describe(__filename, () => {
  let holder = null

  beforeEach(async () => {
    holder = new Holder({adapters})
  })

  afterEach(() => {
    return holder.close()
  })

  it('should insert one ad doc in adColl', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/ad/action/insert'
    ]))
    const natsEx = holder.getItem('natsEx')
    const adColl = holder.getItem('coll/ad')

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
