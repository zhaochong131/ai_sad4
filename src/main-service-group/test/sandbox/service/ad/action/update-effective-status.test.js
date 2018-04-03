const Holder = require('the-holder')
const buildSandboxCollItem = require('../../../lib/build-sandbox-coll-item')
const itemDefinitions = require('../../../../../lib/item-definitions')

describe('action.ad.update-effective-status', () => {
  let holder = null

  beforeEach(() => {
    holder = new Holder()
  })

  afterEach(async () => {
    await holder.close()
  })

  it('should update ad effectiveStatus in adColl', async () => {
    expect.assertions(2)
    const itemDefs = [
      ...itemDefinitions.filter(item => [
        'config',
        'logger',
        'natsEx',
        'mongodb',
        'service/ad/action/updateEffectiveStatus'
      ].includes(item.name)),
      buildSandboxCollItem('coll/ad'),
      {
        name: 'test',
        need: [
          'natsEx',
          'coll/ad',
          'service/ad/action/updateEffectiveStatus' // make sure this item is loaded before test
        ],
        build: async ({natsEx, 'coll/ad': adColl}) => {
          await adColl.insertOne({_id: 'ad', spend: 0})
          await natsEx.call('action.ad.update-effective-status',
            {
              adId: 'ad',
              effectiveStatus: 'DELETED'
            }
          )
          const {effectiveStatus, updatedAt} = await adColl.findOne({_id: 'ad'})
          expect(effectiveStatus).toBe('DELETED')
          expect(typeof updatedAt).toBe('object')
        }
      }
    ]
    await holder.load(itemDefs)
  }, 20 * 1000)
})
