describe(__filename, () => {
  let natsEx = null

  beforeAll(async () => {
    natsEx = await require('nats-ex').connect()
  })

  afterAll(() => {
    return natsEx.close()
  })

  it('build some pts by pt builder', async () => {
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
