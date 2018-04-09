const Holder = require('the-holder')
const filterDefs = require('n3h-filter-items')
const allDefs = require('../../../../lib/item-definitions')
const adapters = require('../../../../lib/item-adapters')

describe(__filename, () => {
  let holder = null

  beforeEach(async () => {
    holder = new Holder({adapters})
  })

  afterEach(() => {
    return holder.close()
  })

  it('should check ad spend and emit overspend event', async (done) => {
    await holder.load(filterDefs(allDefs, [
      'service/main/flow/busySitter/checkAdSpend'
    ]))
    const natsEx = holder.getItem('natsEx')

    // setup data
    const sitter = {_id: 'sitter', budget: 100, closeBudgetRate: 0.8}
    const spend = 120

    // subscribe event
    natsEx.on('step.main.busy-sitter.check-ad-spend.overspend', async ({sitter}) => {
      const {_id: sitterId} = sitter
      try {
        expect(sitterId).toBe('sitter')
        done()
      } catch (err) {
        done(err)
      }
    })

    // emit step
    natsEx.emit('step.main.busy-sitter.query-ad-spend.ok', {sitter, spend})
  })
})
