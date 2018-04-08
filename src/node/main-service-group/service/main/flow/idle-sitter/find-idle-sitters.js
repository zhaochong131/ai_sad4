/*
entry step
find all idle setters and dispatch them
 */

module.exports = {
  type: 'step',
  need: ['natsEx', 'coll/sitter'],
  serviceName: 'main',
  flowName: 'idle-sitter',
  stepName: 'find-idle-sitters',
  emitCases: {
    ok: 'ok',
    empty: 'empty'
  },
  async handler () {
    const {'coll/sitter': sitterColl} = this.items
    const sitters = await sitterColl.find({status: 'idle'}).toArray()
    if (sitters.length === 0) {
      this.emit.empty()
    } else {
      sitters.forEach(sitter => {
        this.emit.ok({sitter})
      })
    }
  }
}
