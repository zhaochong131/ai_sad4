const Holder = require('the-holder')
const allDefs = require('../../../lib/item-definitions')
const filterDefs = require('n3h-filter-items')

describe(__filename, () => {
  let holder = null

  beforeEach(async () => {
    holder = new Holder()
  })

  afterEach(() => {
    return holder.close()
  })

  it('should return an amount of budget to the father', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/main/action/returnBudget'
    ]))
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')

    // setup data
    const father = {budget: 100}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const amount = 66

    // call action
    await natsEx.call('action.main.return-budget', {fatherId: fatherId.toString(), amount})

    // check
    const fatherAfterAction = await fatherColl.findOne({_id: fatherId})
    expect(fatherAfterAction.budget).toBe(166)
  })
})
