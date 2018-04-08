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

  it('should correctly deactivate sitter', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/main/action/deactivateSitter',
      'service/sitter/action/setStatus',
      'service/sitter/action/unsetBudget',
      'service/sitter/action/unsetAd',
      'service/father/action/addBudget',
      'service/ad/action/setEffectiveStatus',
      'service/fbAdAccount/action/deleteCampaign',
      'service/fbAdAccount/action/queryAdFields'
    ]))
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')
    const sitterColl = holder.getItem('coll/sitter')
    const adColl = holder.getItem('coll/ad')

    // setup data
    const father = {budget: 100}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const adId = '120330000040676418'
    const ad = {
      _id: adId,
      campaignId: '120330000040675718',
      effectiveStatus: 'ACTIVE'
    }
    await adColl.insertOne(ad)
    const sitter = {
      budget: 66,
      adId: adId,
      fatherId: fatherId,
      status: 'busy'
    }
    const {insertedId: sitterId} = await sitterColl.insertOne(sitter)

    // call action
    await natsEx.call('action.main.deactivate-sitter', {sitterId})

    // check
    const newFather = await fatherColl.findOne({_id: fatherId})
    const newSitter = await sitterColl.findOne({_id: sitterId})
    const newAd = await adColl.findOne({_id: adId})
    expect(newFather.budget).toBe(166)
    expect(newSitter.status).toBe('idle')
    expect(newSitter.budget).toBeUndefined()
    expect(newSitter.adId).toBeUndefined()
    expect(newAd.effectiveStatus).toBe('DELETED')
  }, 60 * 1000)
})
