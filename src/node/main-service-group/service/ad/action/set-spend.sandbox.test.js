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

  it('should set ad spend', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/ad/action/setSpend'
    ]))
    const natsEx = holder.getItem('natsEx')
    const adColl = holder.getItem('coll/ad')

    const adId = uuid.v4()
    await adColl.insertOne({_id: adId, spend: 0})
    await natsEx.call('action.ad.set-spend', {
      adId: adId,
      spend: 10
    })
    const {spend, updatedAt} = await adColl.findOne({_id: adId})
    expect(spend).toBe(10)
    expect(new Date() - updatedAt).toBeLessThan(1000)
  })
})
