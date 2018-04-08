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

  it('should find busy sitters', async (done) => {
    await holder.load(filterDefs(allDefs, [
      'service/main/flow/busySitter/findBusySitters'
    ]))
    const natsEx = holder.getItem('natsEx')
    const sitterColl = holder.getItem('coll/sitter')

    // setup data
    const sitter = {status: 'busy'}
    const {insertedId: sitterId} = await sitterColl.insertOne(sitter)

    //subscribe event
    natsEx.on('step.main.busy-sitter.find-busy-sitters.ok', async ({sitter}) => {
      const {_id} = sitter
      try {
        expect(_id).toBe(sitterId.toString())
        done ()
      } catch (err) {
        done (err)
      }
    })

    // emit step
    natsEx.emit('step.main.busy-sitter.find-busy-sitters')
  })
})
