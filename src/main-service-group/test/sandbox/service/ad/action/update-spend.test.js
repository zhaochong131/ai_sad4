const Holder = require('the-holder')
const buildSandboxCollItem = require('../../../lib/build-sandbox-coll-item')
const itemDefinitions = require('../../../../../lib/item-definitions')

describe('action.ad.update-spend', () => {
  let holder = null

  beforeEach(() => {
    holder = new Holder()
  })

  afterEach(async () => {
    await holder.close()
  })

  it('should update ad spend in adColl', async () => {
    expect.assertions(2)
    const itemDefs = [
      ...itemDefinitions.filter(item => [
        'config',
        'logger',
        'natsEx',
        'mongodb',
        'service/ad/action/updateSpend'
      ].includes(item.name)),
      buildSandboxCollItem('coll/ad'),
      {
        name: 'test',
        need: [
          'natsEx',
          'coll/ad',
          'service/ad/action/updateSpend' // make sure this item is loaded before test
        ],
        build: async ({natsEx, 'coll/ad': adColl}) => {
          await adColl.insertOne({_id: 'ad', spend: 0})
          await natsEx.call('action.ad.update-spend',
            {
              adId: 'ad',
              spend: 10
            }
          )
          const {spend, updatedAt} = await adColl.findOne({_id: 'ad'})
          expect(spend).toBe(10)
          expect(typeof updatedAt).toBe('object')
        }
      }
    ]
    await holder.load(itemDefs)
  }, 20 * 1000)
})
