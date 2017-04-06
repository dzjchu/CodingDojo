class Bike(object):
    def __init__(self, price=None, max_speed=None):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print self.price
        print self.max_speed
        print self.miles
        #return self
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        self.miles -= 5
        return self

Bike1 = Bike()
Bike1.ride().ride().ride().reverse().displayInfo()

Bike2 = Bike()
Bike2.ride().ride().reverse().reverse().displayInfo()