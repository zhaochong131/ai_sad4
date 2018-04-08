const requestFacebook = require('request-facebook')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

const apiVersion = 'v2.12'

module.exports = {
  type: 'action',
  need: ['natsEx', 'config'],
  serviceName: 'fb-ad-account',
  actionName: 'delete-ad',
  validator: buildValidator({
    adId: Joi.string()
  }),
  async handler ({adId}) {
    const {
      facebookAccessToken
    } = this.items.config

    const response = await requestFacebook({
      apiVersion,
      accessToken: facebookAccessToken,
      method: 'DELETE',
      path: adId
    })

    return response.success
  }
}
