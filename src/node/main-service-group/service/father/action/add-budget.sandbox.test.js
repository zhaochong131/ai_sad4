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

  it('should add budget', async () => {
    expect.assertions(1)

    await holder.load(filterDefs(allDefs, [
      'service/father/action/addBudget'
    ]))
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')

    // setup data
    const father = {budget: 100}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const amount = 66

    // call action
    await natsEx.call('action.father.add-budget', {fatherId: fatherId.toString(), amount})

    // check
    const fatherAfterAction = await fatherColl.findOne({_id: fatherId})
    expect(fatherAfterAction.budget).toBe(father.budget + amount)
  })
})
