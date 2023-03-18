# B - Postal Code
a,b = list(map(int,input().split()))
s = list(input())

for i in range(len(s)):
    if i == a:
        if s[i] != "-":
            print("No")
            exit()
    else:
        if s[i].isdecimal() == False:
            print("No")
            exit()



print("Yes")
