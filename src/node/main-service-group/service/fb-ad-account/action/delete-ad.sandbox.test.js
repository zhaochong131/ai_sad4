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

  it('should delete an ad', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/fbAdAccount/action/deleteAd'
    ]))
    const natsEx = holder.getItem('natsEx')

    const success = await natsEx.call('action.fb-ad-account.delete-ad', {adId: '120330000040583418'})
    expect(success).toBe(true)
  }, 60 * 1000)
})
