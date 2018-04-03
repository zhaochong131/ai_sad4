const Holder = require('the-holder')
const buildSandboxCollItem = require('../../../lib/build-sandbox-coll-item')
const itemDefinitions = require('../../../../../lib/item-definitions')

describe('action.ad.insert', () => {
  let holder = null

  beforeEach(() => {
    holder = new Holder()
  })

  afterEach(async () => {
    await holder.close()
  })

  it('should insert one ad doc in adColl', async () => {
    expect.assertions(4)
    const itemDefs = [
      ...itemDefinitions.filter(item => [
        'config',
        'logger',
        'natsEx',
        'mongodb',
        'service/ad/action/insert'
      ].includes(item.name)),
      buildSandboxCollItem('coll/ad'),
      {
        name: 'test',
        need: [
          'natsEx',
          'coll/ad',
          'service/ad/action/insert' // make sure this item is loaded before test
        ],
        build: async ({natsEx, 'coll/ad': adColl}) => {
          await natsEx.call('action.ad.insert',
            {
              _id: 'ad',
              adsetId: 'adset',
              campaignId: 'campaign',
              effectiveStatus: 'ACTIVE'
            }
          )
          const {adsetId, campaignId, effectiveStatus, createdAt} = await adColl.findOne({_id: 'ad'})
          expect(adsetId).toBe('adset')
          expect(campaignId).toBe('campaign')
          expect(effectiveStatus).toBe('ACTIVE')
          expect(typeof createdAt).toBe('object')
        }
      }
    ]
    await holder.load(itemDefs)
  }, 20 * 1000)
})
