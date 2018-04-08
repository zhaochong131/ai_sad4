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

  it('should update ad spend in adColl', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/ad/action/updateSpend'
    ]))
    const natsEx = holder.getItem('natsEx')
    const adColl = holder.getItem('coll/ad')

    const adId = uuid.v4()
    await adColl.insertOne({_id: adId, spend: 0})
    await natsEx.call('action.ad.update-spend', {
      adId: adId,
      spend: 10
    })
    const {spend, updatedAt} = await adColl.findOne({_id: adId})
    expect(spend).toBe(10)
    expect(new Date() - updatedAt).toBeLessThan(1000)
  })
})
