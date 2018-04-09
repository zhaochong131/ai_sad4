/*
refresh ad which is pending
 */
const topics = {
  queryAdFields: 'action.fb-ad-account.query-ad-fields',
  updateEffectiveStatus: 'action.ad.update-effective-status'
}

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/ad'],
  serviceName: 'main',
  actionName: 'refresh-pending-ads',
  async handler (data, message) {
    const {'coll/ad': adColl} = this.items
    const pendingAds = await adColl.find({effectiveStatus: 'pending'}).toArray()
    const promises = pendingAds.map(ad => {
      return new Promise(async (resolve, reject) => {
        const fbAd = await message.call(topics.queryAdFields, {adId: ad._id, fields: ['effective_status']})
        await message.call(topics.updateEffectiveStatus, {adId: ad._id, effectiveStatus: fbAd.effective_status})
        resolve()
      })
    })
    await Promise.all(promises)
  }
}
