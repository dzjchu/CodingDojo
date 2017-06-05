#part I
class MathDojo(object):
  def __init__ (self):
    self.result = 0

  def add(self, *input):
    for num in input:
      if isinstance(num,list):
        for num2 in num: 
          self.result = self.result + num2
      else:
        self.result = self.result + num
    return self

  def subtract(self, *input):
    for num in input:
      if isinstance(num,list):
        for num2 in num: 
          self.result = self.result - num2
      else:
        self.result = self.result - num
    return self

  def end(self):
    print self.result

md = MathDojo()
md.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).end()
