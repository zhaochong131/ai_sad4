const Holder = require('the-holder')
const allDefs = require('../../../lib/item-definitions')
const filterDefs = require('n3h-filter-items')
const uuid = require('uuid')

describe(__filename, () => {
  let holder = null

  beforeEach(async () => {
    holder = new Holder()
  })

  afterEach(() => {
    return holder.close()
  })

  it('should update ad effectiveStatus in adColl', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/ad/action/updateEffectiveStatus'
    ]))
    const natsEx = holder.getItem('natsEx')
    const adColl = holder.getItem('coll/ad')

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
