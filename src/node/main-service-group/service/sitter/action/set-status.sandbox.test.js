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

  it('should update status of given sitter', async () => {
    expect.assertions(3)

    await holder.load(filterDefs(allDefs, [
      'service/sitter/action/setStatus'
    ]))
    const natsEx = holder.getItem('natsEx')
    const sitterColl = holder.getItem('coll/sitter')

    // setup data
    const sitter = {status: 'busy'}
    const {insertedId: sitterId} = await sitterColl.insertOne(sitter)

    // check side message
    natsEx.on('action.sitter.set-status.ok', (data) => {
      expect(data.sitterId).toBe(sitterId.toString())
      expect(data.status).toBe('idle')
    })

    // call action
    await natsEx.call('action.sitter.set-status', {
      sitterId: sitterId.toString(),
      status: 'idle'
    })

    // check
    const sitterAfterAction = await sitterColl.findOne({_id: sitterId})
    expect(sitterAfterAction.status).toBe('idle')
  })
})
