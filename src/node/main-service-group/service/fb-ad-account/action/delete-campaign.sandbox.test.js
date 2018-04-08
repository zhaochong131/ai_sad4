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

  it('should delete a campaign', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/fbAdAccount/action/deleteCampaign'
    ]))
    const natsEx = holder.getItem('natsEx')

    const success = await natsEx.call('action.fb-ad-account.delete-campaign', {campaignId: '120330000040582718'})
    expect(success).toBe(true)
  }, 60 * 1000)
})
