const Holder = require('the-holder')
const filterDefs = require('n3h-filter-items')
const allDefs = require('../../../../../lib/item-definitions')

describe('action.pt.build-pts', () => {
  let holder = null

  beforeEach(() => {
    holder = new Holder()
  })

  afterEach(() => {
    return holder.close()
  })

  it('build some pts by pt builder', async () => {
    const defs = filterDefs(allDefs, [
      'config',
      'logger',
      'natsEx',
      'service/pt/action/buildPts'
    ])
    await holder.load(defs)
    const natsEx = await holder.getItem('natsEx')
    const pts = await natsEx.call('action.pt.build-pts', {
      builder: ptBuilder,
      count: 100
    })
    expect(pts.length).toBe(100)
    expect(pts.find(x => x.name === 'Bob')).toBeTruthy()
    expect(pts.find(x => x.name === 'Alice')).toBeTruthy()
    expect(pts.find(x => x.name === 'Lucy')).toBeTruthy()
  })
})

const ptBuilder = `
({weighted}) => {
  return {
    name: weighted(['Bob', 'Alice', 'Lucy'])
  }
}
`
