#Solution 1
row = " ".join ("* " * 8);
for i in range (8, 0, -1):
    print (row [(i % 2 * 2):] [:15] )

#Solution 2
for x in range(8):
    myStr = ""
    if x % 2 == 1:
        myStr += " "
    for y in range (4): 
        myStr += "* "
    print myStr
