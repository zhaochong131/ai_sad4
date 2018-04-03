const Holder = require('the-holder')
const itemDefinitions = require('../../../../../lib/item-definitions')

describe('action.pt.build-pts', () => {
  let holder = null

  beforeEach(() => {
    holder = new Holder()
  })

  afterEach(() => {
    return holder.close()
  })

  it('build some pts by pt builder', (done) => {
    const itemDefs = [
      ...itemDefinitions.filter(item => [
        'config',
        'logger',
        'natsEx',
        'service/pt/action/buildPts'
      ].includes(item.name)),
      {
        name: 'test',
        need: [
          'natsEx',
          'service/pt/action/buildPts' // make sure this item is loaded before test
        ],
        build: async ({natsEx}) => {
          try {
            const pts = await natsEx.call('action.pt.build-pts', {
              builder: ptBuilder,
              count: 100
            })
            expect(pts.length).toBe(100)
            expect(pts.find(x => x.name === 'Bob')).toBeTruthy()
            expect(pts.find(x => x.name === 'Alice')).toBeTruthy()
            expect(pts.find(x => x.name === 'Lucy')).toBeTruthy()
            done()
          } catch (err) {
            done(err)
          }
        }
      }
    ]
    holder.load(itemDefs)
  })
})

const ptBuilder = `
({weighted}) => {
  return {
    name: weighted(['Bob', 'Alice', 'Lucy'])
  }
}
`