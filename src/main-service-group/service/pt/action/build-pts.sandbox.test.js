const Holder = require('the-holder')
const allDefs = require('../../../lib/item-definitions')
const filterDefs = require('n3h-filter-items')

describe(__filename, () => {
  let holder = null

  beforeEach(async () => {
    holder = new Holder()
  })

  afterEach(() => {
    return holder.close()
  })

  it('build some pts by pt builder', async () => {
    await holder.load(filterDefs(allDefs, [
      'service/pt/action/buildPts'
    ]))
    const natsEx = holder.getItem('natsEx')

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
