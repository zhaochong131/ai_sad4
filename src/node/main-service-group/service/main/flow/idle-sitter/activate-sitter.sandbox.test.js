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

  it('should activate sitter', async (done) => {
    await holder.load(filterDefs(allDefs, [
      'service/main/flow/idleSitter/activateSitter'
    ]))
    const natsEx = holder.getItem('natsEx')
    const sitterColl = holder.getItem('coll/sitter')

    // setup data
    const {insertedId: sitterId} = await sitterColl.insertOne({status: 'idle'})
    const sitter = {
      _id: sitterId.toString(),
      status: 'idle'
    }
    const adId = 'ad'
    const budget = 100

    // subscribe event
    natsEx.on('step.main.idle-sitter.activate-sitter.ok', async ({sitter}) => {
      const {_id} = sitter
      try {
        const {status, adId, budget} = await sitterColl.findOne({_id: ObjectID(_id)})
        expect(status).toBe('busy')
        expect(adId).toBe('ad')
        expect(budget).toBe(100)
        done()
      } catch (err) {
        done(err)
      }
    })

    // emit step
    natsEx.emit('step.main.idle-sitter.request-ad.ok', {sitter, budget, adId})
  })
})
