l = ['hello','world','my','name','is','Anna']
char = 'o'
n = []

for x in l:
    for y in x:
        if y == char:
            n.append(x)
print n

