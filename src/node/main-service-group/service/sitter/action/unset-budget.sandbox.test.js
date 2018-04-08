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

  it('should unset sitter budget', async () => {
    expect.assertions(2)

    await holder.load(filterDefs(allDefs, [
      'service/sitter/action/unsetBudget'
    ]))
    const natsEx = holder.getItem('natsEx')
    const sitterColl = holder.getItem('coll/sitter')

    // setup data
    const sitter = {budget: 100}
    const {insertedId: sitterId} = await sitterColl.insertOne(sitter)

    // check side message
    natsEx.on('action.sitter.unset-budget.ok', (data, message, topic) => {
      console.log({topicc: topic})
      expect(data.sitterId).toBe(sitterId.toString())
    })

    // call action
    await natsEx.call('action.sitter.unset-budget', {
      sitterId: sitterId.toString()
    })

    // check
    const sitterAfterAction = await sitterColl.findOne({_id: sitterId})
    expect(sitterAfterAction.budget).toBeUndefined()
  })
})
