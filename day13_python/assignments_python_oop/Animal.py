class Animal(object):
  def __init__ (self,name):
    self.name = name
    self.health = 100

  def walk(self):
    self.health += 1
    return self

  def run(self):
    self.health += 5
    return self

  def displayHealth(self):
    print self.name, self.health

class Dog(Animal):
  def __init__ (self,name):
    super(Dog, self).__init__(name)
    self.health = 150

  def pet(self):
    self.health += 5
    return self

dog1 = Dog("Pipi")
dog1.walk().walk().walk().run().run().displayHealth()

class Dargon(Animal):
  def __init__ (self,name):
    super(Dargon, self).__init__(name)
    self.health = 170
  def fly(self):
    self.health -= 10
    return self
  def displayHealth(self):
    print "This is a dargon!"
    super(Dargon, self).displayHealth()

dargon1 = Dargon("Love")
dargon1.walk().walk().walk().run().run().fly().fly().displayHealth()


class Cat(Animal):
  def __init__ (self,name):
    super(Cat, self).__init__(name)
    self.health = 999

cat1 = Cat("Lucky")
cat1.displayHealth()