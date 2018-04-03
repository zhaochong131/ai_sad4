/*
request an ad from one mother
 */
const {ObjectID} = require('mongodb')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')
const buildAction = require('n3h-action-builder')

const topics = {
  createAd: 'action.fb-ad-account.create-ad',
  queryAdFields: 'action.fb-ad-account.query-ad-fields',
  insertAd: 'action.ad.insert',
  buildPts: 'action.pt.build-pts'
}

module.exports = {
  need: ['natsEx', 'coll/mother', 'coll/ad'],
  build: ({natsEx, 'coll/mother': motherColl, 'coll/ad': adColl}) => {
    buildAction({
      natsEx,
      serviceName: 'main',
      actionName: 'request-ad',
      validator: buildValidator({
        motherId: Joi.string()
      }),
      async handler ({motherId}, message) {
        motherId = ObjectID(motherId)
        const mother = await motherColl.findOne({_id: motherId})
        const {ptBuilder} = mother
        const [pt] = await message.call(topics.buildPts, {builder: ptBuilder})
        const adId = await message.call(topics.createAd, {params: pt})
        const fbAd = await message.call(topics.queryAdFields, {adId, fields: ['adset_id', 'campaign_id', 'effective_status']})
        await message.call(topics.insertAd, {
          _id: adId,
          adsetId: fbAd.adset_id,
          campaignId: fbAd.campaign_id,
          effectiveStatus: fbAd.effective_status
        })
        return adId
      }
    })
  }
}
