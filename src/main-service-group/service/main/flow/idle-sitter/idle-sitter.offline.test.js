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
      flowName: 'idle-sitter',
      entries: ['find-idle-sitters'],
      follows: [
        ['request-budget', 'find-idle-sitters', 'ok'],
        ['request-ad', 'request-budget', 'ok'],
        ['activate-sitter', 'request-ad', 'ok'],
        ['return-budget', 'request-ad', 'failed']
      ]
    })
  })
})
