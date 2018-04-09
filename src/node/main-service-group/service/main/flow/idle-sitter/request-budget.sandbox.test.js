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

  it('should request budget from father', async (done) => {
    await holder.load(filterDefs(allDefs, [
      'service/main/flow/idleSitter/requestBudget',
      'service/main/action/requestBudget'
    ]))
    const natsEx = holder.getItem('natsEx')
    const fatherColl = holder.getItem('coll/father')

    // setup data
    const {insertedId: fatherId} = await fatherColl.insertOne({budget: 100})
    const sitter = {
      fatherId: fatherId.toString(),
      requestBudget: 40
    }

    // subscribe event
    natsEx.on('step.main.idle-sitter.request-budget.ok', async ({sitter}) => {
      const {fatherId} = sitter
      try {
        const {budget} = await fatherColl.findOne({_id: ObjectID(fatherId)})
        expect(budget).toBe(60)
        done()
      } catch (err) {
        done(err)
      }
    })

    // emit step
    natsEx.emit('step.main.idle-sitter.find-idle-sitters.ok', {sitter})
  })
})
