const Holder = require('the-holder')
const loadItems = require('n3h-load-items')
const path = require('path')

describe('cron-trigger-service', () => {
  let holder = null

  beforeEach(() => {
    holder = new Holder()
  })

  afterEach(async () => {
    await holder.close()
  })

  it('should trigger action correctly', (done) => {
    process.env.TRIGGER_1 = '*/2 * * * * * | ping'
    const itemDefs = [
      ...loadItems({dirname: path.resolve(__dirname, '../items')}),
      {
        name: 'test',
        need: ['natsEx', 'cronTrigger'],
        build: async ({natsEx}) => {
          natsEx.on('ping', () => {
            done()
          })
        }
      }
    ]
    holder.load(itemDefs)
  }, 20 * 1000)
})
