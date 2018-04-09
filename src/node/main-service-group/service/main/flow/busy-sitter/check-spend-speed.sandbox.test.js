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

  it('should check ad spend speed and emit ok event', async (done) => {
    await holder.load(filterDefs(allDefs, [
      'service/main/flow/busySitter/checkSpendSpeed'
    ]))
    const natsEx = holder.getItem('natsEx')
    const adColl = holder.getItem('coll/ad')

    // setup data
    const sitter = {_id: 'sitter', adId: 'ad', minSpendSpeed: 10, spendSpeedProtectionTime: 12}
    const ad = {_id: 'ad', createdAt: new Date()}
    const spend = 100
    await adColl.insertOne(ad)

    // subscribe event
    natsEx.on('step.main.busy-sitter.check-spend-speed.ok', async ({sitter}) => {
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
