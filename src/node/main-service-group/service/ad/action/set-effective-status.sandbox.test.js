const Holder = require('the-holder')
const filterDefs = require('n3h-filter-items')
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

  it('should update effective status of given ad', async () => {
    expect.assertions(1)

    await holder.load(filterDefs(allDefs, [
      'service/ad/action/setEffectiveStatus'
    ]))
    const natsEx = holder.getItem('natsEx')
    const adColl = holder.getItem('coll/ad')

    // setup data
    const ad = {_id: 'some ad', effectiveStatus: 'ACTIVE'}
    await adColl.insertOne(ad)

    // call action
    await natsEx.call('action.ad.set-effective-status', {
      adId: ad._id,
      effectiveStatus: 'DELETED'
    })

    // check
    const adAfterAction = await adColl.findOne({_id: ad._id})
    expect(adAfterAction.effectiveStatus).toBe('DELETED')
  })
})
