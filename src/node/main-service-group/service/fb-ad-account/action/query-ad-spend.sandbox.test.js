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

  it('should query ad spend', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/fbAdAccount/action/queryAdSpend'
    ]))
    const natsEx = holder.getItem('natsEx')

    const spend = await natsEx.call('action.fb-ad-account.query-ad-spend', {adId: '120330000040583418'})
    expect(typeof spend).toBe('number')
    expect(spend).toBeGreaterThan(0)
  }, 60 * 1000)
})
