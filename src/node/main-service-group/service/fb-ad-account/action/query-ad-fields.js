const requestFacebook = require('request-facebook')
const Joi = require('joi')
const buildValidator = require('n3h-joi-validator')

const apiVersion = 'v2.12'

module.exports = {
  type: 'action',
  need: ['natsEx', 'config', 'logger'],
  serviceName: 'fb-ad-account',
  actionName: 'query-ad-fields',
  validator: buildValidator({
    adId: Joi.string(),
    fields: Joi.array().items(Joi.string())
  }),
  async handler ({adId, fields}) {
    const {
      facebookAccessToken
    } = this.items.config

    return requestFacebook({
      apiVersion,
      accessToken: facebookAccessToken,
      method: 'GET',
      path: `${adId}`,
      query: {
        fields: fields.join(',')
      }
    })
  }
}
