#Find and Replace
str = "It's thanksgiving day. It's my birthday,too!"
print str.find("day")
print str.replace("day","month")

#Min and Max
x = [2,54,-2,7,12,98]
min(x)
max(x)

#First and Last
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0], x[-1]
y = x[0] + x[-1]

#New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
newList = x[:len(x)/2]

y=[]
y.append(newList)
y.extend(x[len(x)/2:])
