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

  it('should request an amount of budget from the father', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/main/action/requestBudget'
    ]))
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')

    // setup data
    const father = {budget: 100}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const amount = 66

    // call action
    const allocation = await natsEx.call('action.main.request-budget', {fatherId: fatherId.toString(), amount})

    // check
    expect(allocation).toBe(66)
  })

  it('should only get remaining budget', async () => {
    const defs = filterDefs(allDefs, [
      'service/main/action/requestBudget'
    ])
    await holder.load(defs)
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')

    // setup data
    const father = {budget: 66}
    const {insertedId: fatherId} = await fatherColl.insertOne(father)
    const amount = 100

    // call action
    const allocation = await natsEx.call('action.main.request-budget', {fatherId: fatherId.toString(), amount})

    // check
    expect(allocation).toBe(66)
  })
})
