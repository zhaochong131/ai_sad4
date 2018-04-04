const Holder = require('the-holder')
const allDefs = require('../../../lib/item-definitions')
const filterDefs = require('n3h-filter-items')

describe(__filename, () => {
  let holder = null

  beforeEach(async () => {
    holder = new Holder()
  })

  afterEach(() => {
    return holder.close()
  })

  it('should request an ad from mother', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/pt/action/buildPts',
      'service/fbAdAccount/action/createAd',
      'service/fbAdAccount/action/queryAdFields',
      'service/ad/action/insert',
      'service/main/action/requestAd'
    ]))
    const natsEx = holder.getItem('natsEx')
    const motherColl = holder.getItem('coll/mother')
    const adColl = holder.getItem('coll/ad')

    // setup data
    const mother = {ptBuilder: ptBuilderString}
    const {insertedId: motherId} = await motherColl.insertOne(mother)

    // call action
    const adId = await natsEx.call('action.main.request-ad', {motherId: motherId.toString()})

    // check result
    expect(typeof adId).toBe('string')
    const {_id: foundId, effectiveStatus} = await adColl.findOne({_id: adId})
    expect(foundId).toBe(adId)
    expect(effectiveStatus).toBe('ACTIVE')
  }, 60 * 1000)
})

const ptBuilderString = `
module.exports = function () {
  return {
    'adset_spec': {
      'targeting': {
        'geo_locations': {
          'countries': [
            'HK',
            'TW'
          ],
          'location_types': [
            'home'
          ]
        },
        'publisher_platforms': [
          'facebook'
        ],
        'facebook_positions': [
          'feed'
        ],
        'user_os': [
          'Android_ver_6.0_and_above'
        ],
        'flexible_spec': [
          {
            'interests': [
              {
                'id': '6003206308286',
                'name': 'Science fiction movies'
              }
            ]
          }
        ],
        'user_device': [
          'g5',
          'g6',
          'galaxy s7',
          'galaxy s7 active',
          'galaxy s7 edge',
          'galaxy s8',
          'galaxy s8+',
          'mate 9',
          'moto z droid',
          'moto z play dual',
          'nexus 6p',
          'p10 lite',
          'p9',
          'p9 lite',
          'pixel',
          'u ultra',
          'v20'
        ]
      },
      'optimization_goal': 'OFFSITE_CONVERSIONS',
      'promoted_object': {
        'application_id': '1616662925227761',
        'object_store_url': 'http://play.google.com/store/apps/details?id=com.tap4fun.reignofwar',
        'custom_event_type': 'PURCHASE'
      },
      'campaign_spec': {
        'name': 'SAD',
        'status': 'ACTIVE',
        'objective': 'APP_INSTALLS',
        'buying_type': 'AUCTION'
      },
      'attribution_spec': [
        {
          'event_type': 'CLICK_THROUGH',
          'window_days': 7
        }
      ],
      'billing_event': 'IMPRESSIONS',
      'bid_amount': 637,
      'daily_budget': 5000,
      'status': 'ACTIVE',
      'name': 'SAD'
    },
    'creative': {
      'name': '主页帖中的广告 #6,072,102,338,398',
      'object_story_spec': {
        'page_id': '585757974886198',
        'link_data': {
          'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.reignofwar',
          'message': 'try it out',
          'image_hash': 'ab659f1a43e2079435d08025bb3409b3',
          'call_to_action': {
            'type': 'INSTALL_MOBILE_APP',
            'value': {
              'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.reignofwar'
            }
          }
        }
      }
    },
    'status': 'ACTIVE',
    'name': 'SAD'
  }
}
`
