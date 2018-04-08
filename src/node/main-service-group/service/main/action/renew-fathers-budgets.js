/**
 * renew all fathers budgets
 */

module.exports = {
  type: 'action',
  need: ['natsEx', 'coll/father'],
  serviceName: 'main',
  actionName: 'renew-fathers-budgets',
  async handler () {
    const {'coll/father': fatherColl} = this.items
    const fathers = await fatherColl.find({}).toArray()
    const operations = fathers.map(father => ({
      updateOne: {
        filter: {_id: father._id},
        update: {$set: {budget: father.newBudget}}
      }
    }))
    if (fathers.length > 0) await fatherColl.bulkWrite(operations, {order: false})
  }
}
