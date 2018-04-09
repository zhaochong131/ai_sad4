const Holder = require('the-holder')
const filterDefs = require('n3h-filter-items')
const allDefs = require('../../../../lib/item-definitions')
const adapters = require('../../../../lib/item-adapters')
const {ObjectID} = require('mongodb')

describe(__filename, () => {
  let holder = null

  beforeEach(async () => {
    holder = new Holder({adapters})
  })

  afterEach(() => {
    return holder.close()
  })

  it('should return budget to father', async (done) => {
    await holder.load(filterDefs(allDefs, [
      'service/main/flow/idleSitter/returnBudget',
      'service/main/action/returnBudget'
    ]))
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')

    // setup data
    const {insertedId: fatherId} = await fatherColl.insertOne({budget: 0})
    const sitter = {fatherId: fatherId.toString()}
    const budget = 40

    // subscribe event
    natsEx.on('step.main.idle-sitter.return-budget.ok', async ({sitter}) => {
      const {fatherId} = sitter
      try {
        const {budget} = await fatherColl.findOne({_id: ObjectID(fatherId)})
        expect(budget).toBe(40)
        done()
      } catch (err) {
        done(err)
      }
    })

    // emit step
    natsEx.emit('step.main.idle-sitter.request-ad.failed', {sitter, budget})
  })
})
