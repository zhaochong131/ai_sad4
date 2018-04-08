const env = process.env

module.exports = {
  build: () => {
    return {
      item: {
        // test-only

        randomNatsNamespace: env.RANDOM_NATS_NAMESPACE,
        randomMongoColl: env.RANDOM_MONGO_COLL,

        // regular

        natsUrl: env.NATS_URL,
        natsNamespace: env.NATS_NAMESPACE,

        facebookAccessToken: env.FACEBOOK_ACCESS_TOKEN,
        facebookAdAccountId: env.FACEBOOK_AD_ACCOUNT_ID,

        mongoUrl: env.MONGO_URL,
        mongoDb: env.MONGO_DB,

        mongoCollFather: env.MONGO_COLL_FATHER,
        mongoCollMother: env.MONGO_COLL_MOTHER,
        mongoCollSitter: env.MONGO_COLL_SITTER,
        mongoCollAd: env.MONGO_COLL_AD
      }
    }
  }
}
