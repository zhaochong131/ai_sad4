/*
create an facebook ad
 */

const requestFacebook = require('request-facebook')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

const apiVersion = 'v2.12'

module.exports = {
  type: 'action',
  need: ['natsEx', 'config'],
  serviceName: 'fb-ad-account',
  actionName: 'create-ad',
  validator: buildValidator({
    params: Joi.object()
  }),
  async handler ({params}) {
    const {
      facebookAccessToken,
      facebookAdAccountId
    } = this.items.config

    const ad = await requestFacebook({
      apiVersion,
      accessToken: facebookAccessToken,
      method: 'POST',
      path: `${facebookAdAccountId}/ads`,
      body: params
    })

    return ad.id
  }
}
