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

  it('should query ad fields', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/fbAdAccount/action/queryAdFields'
    ]))
    const natsEx = holder.getItem('natsEx')

    const fields = await natsEx.call('action.fb-ad-account.query-ad-fields', {adId: '120330000040583418', fields: ['status']})
    expect(fields.status).toBe('DELETED')
  }, 60 * 1000)
})
