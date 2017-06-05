class Product(object):
  def __init__ (self, price, itemName, weight, brand, cost):
    self.price = price
    self.itemName = itemName
    self.weight = weight
    self.brand = brand
    self.cost = cost
    self.status = "For sale"

  def sell(self):
    self.status = "Sold"
    return self

  def addTax(self, tax):
    self.tax = tax
    self.price = self.price * (1+self.tax)
    return self

  def returnItem(self, reason):
    self.reason = reason
    if self.reason == "defective":
      self.status = "Defective"
      self.price = 0
    if self.reason == "returned in the box":
      self.status = "like new, for sale"
    if self.reason == "box opened":
      self.status = "used"
      self.price = self.cost*0.8
    return self

  def displayInfo(self):
    print self.price
    print self.itemName
    print self.weight
    print self.brand 
    print self.cost
    print self.status

prodcut1 = Product(20,"Chip", 30, "whatsup", 50)
prodcut1.addTax(0.1).returnItem("defective").displayInfo()

