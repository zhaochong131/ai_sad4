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

  it('should unset sitter ad', async () => {
    expect.assertions(1)

    await holder.load(filterDefs(allDefs, [
      'service/sitter/action/unsetAd'
    ]))
    const natsEx = holder.getItem('natsEx')
    const sitterColl = holder.getItem('coll/sitter')

    // setup data
    const sitter = {adId: 'fake ad id'}
    const {insertedId: sitterId} = await sitterColl.insertOne(sitter)

    // call action
    await natsEx.call('action.sitter.unset-ad', {
      sitterId: sitterId.toString()
    })

    // check
    const sitterAfterAction = await sitterColl.findOne({_id: sitterId})
    expect(sitterAfterAction.adId).toBeUndefined()
  })
})
