#Multiples
#Part 1
for x in range(1, 1001):
    if x%2 == 0:
        print x
#Part 2
for x in range(4, 1000001):
    if x%5 == 0:
        print x

#Sum List
a = [1, 2, 5, 10, 255, 3]
sum(a)

#sum longway
a = [1, 2, 5, 10, 255, 3]
mySum = 0
for x in a:
    mySum += x

print mySum


#Average list
a = [1, 2, 5, 10, 255, 3]
sum(a)/len(a)

#Average longway
a = [1, 2, 5, 10, 255, 3]
mySum = 0
myAve = 0
for x in a:
    mySum += x
    myAve = myAve + 1
print mySum/myAve