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

  it('should renew the budgets of all fathers', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/main/action/renewFathersBudgets'
    ]))
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')

    // setup data
    const father = {budget: 100, newBudget: 666}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)

    // call action
    await natsEx.call('action.main.renew-fathers-budgets')

    // check
    const newFather = await fatherColl.findOne({_id: fatherId})
    expect(newFather.budget).toBe(666)
  })
})
