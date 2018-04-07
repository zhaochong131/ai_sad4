/*
entry step
find all busy setters and dispatch them
 */

module.exports = {
  type: 'step',
  need: ['natsEx', 'coll/sitter'],
  serviceName: 'main',
  flowName: 'busy-sitter',
  stepName: 'find-busy-sitters',
  emitCases: {
    ok: 'ok',
    empty: 'empty'
  },
  async handler () {
    const {'coll/sitter': sitterColl} = this.items
    const sitters = await sitterColl.find({status: 'busy'}).toArray()
    if (sitters.length === 0) {
      this.emit.empty()
    } else {
      sitters.forEach(sitter => {
        this.emit.ok({sitter})
      })
    }
  }
}
