# "Place order" Example

```
Workflow: "Place order"
triggered by:
  OrderReceived event
input:
  Order (from the triggering event)
  ProductCatalog  (to lookup prices)
output:
  OrderPlaced event (to be sent to downstream systems)
  The final PlacedOrder (to store in the database)
  An OrderAcknowledgment (to be sent to the customer)
```

## Document the data with "AND"

```
data Order =
  CustomerInfo
  AND ShippingAddress
  AND BillingAddress
  AND list of OrderLines
  AND AmountToBill
```

```
data OrderLine =
  Product
  AND OrderQuantity
  AND Price
```

```
data CustomerInfo = CustomerName AND ContactInfo
data CustomerName = FirstName AND LastName
```

```
data BillingAddress = ??? // don't know yet
```

## Document choices with OR

```
data OrderQuantity =
  UnitQuantity
  OR KilogramQuantity
```

```
data ContactInfo =
  EmailAddress
  OR PhoneNumber
```

## Document simple/constrained types

```
data UnitQuantity = integer between 1 and ?
data KilogramQuantity = decimal between ? and ?
```

```
data EmailAddress = non empty string containing an @ symbol
data PhoneNumber = non empty string containing only digits, hyphens, and spaces
```
