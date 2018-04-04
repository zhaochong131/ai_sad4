const Holder = require('the-holder')
const loadItems = require('n3h-load-items')
const uuid = require('uuid')
const path = require('path')

const defs = loadItems({dirname: path.resolve(__dirname, 'items')})

describe(__filename, () => {
  let holder = null

  beforeEach(() => {
    holder = new Holder()
  })

  afterEach(() => {
    return holder.close()
  })

  it('should trigger action correctly', (done) => {
    const topic = uuid.v4()
    process.env.TRIGGER_1 = `*/1 * * * * * | ${topic}`
    holder.load(defs).then(() => {
      const natsEx = holder.getItem('natsEx')
      natsEx.on(topic, () => {
        done()
      })
    }).catch(done)
  })
})
