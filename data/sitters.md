# Sitters

```
{
  _id: ObjectID,
  fatherId: ObjectID,
  motherId: ObjectID,
  status: 'idle' | 'busy' | 'disabled' // should do nothing for the disabled
  adId: String,
  budget: Number, // current budget the sitter holds
  requestBudget: Number, // the amount of budget this sitter will try to request from the father each time
  closeBudgetRate: Number, // when ad spend reach budget*rate, then close the ad
  minSpendSpeed: Number, // dollars per hours
  spendSpeedProtectionTime: Number, // hours
}
```