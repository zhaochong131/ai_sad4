const checkFlow = require('n3h-check-flow')
const loadItems = require('n3h-load-items')

const steps = loadItems({
  dirname: __dirname,
  filter: (file) => !file.includes('.test.')
})

describe(__filename, () => {
  it('should be correct', () => {
    checkFlow(steps, {
      serviceName: 'main',
      flowName: 'busy-sitter',
      entries: ['find-busy-sitters'],
      follows: [
        ['query-ad-spend', 'find-busy-sitters', 'ok'],
        ['check-ad-spend', 'query-ad-spend', 'ok'],
        ['check-spend-speed', 'query-ad-spend', 'ok'],
        ['deactivate-sitter', 'check-ad-spend', 'overspend'],
        ['deactivate-sitter', 'check-spend-speed', 'too-low']
      ]
    })
  })
})