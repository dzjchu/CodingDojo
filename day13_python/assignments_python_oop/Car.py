class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
    def display_all(self):
        print "Price:", self.price
        print "{} {}{}".format("Speed:", self.speed, "mph")
        print "Fuel:", self.price
        print "{} {}{}".format("Mileage:", self.mileage, "mpg")
        print "Tax: ", self.tax

Car1 = Car(2000,35,"Full",15)
Car1.display_all()

Car2 = Car(2000,5,"Not Full",105)
Car2.display_all()

Car3 = Car(2000,15,"Kind of Full",95)
Car3.display_all()

Car4 = Car(2000,25,"Full",25)
Car4.display_all()

Car5 = Car(2000,45,"Full",25)
Car5.display_all()

Car6 = Car(20000000,35,"Full",15)
Car6.display_all()