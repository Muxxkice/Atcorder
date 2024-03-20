# B - String Rotation
s = list(input())
t = list(input())


for i in range(len(s)):
    a = s.pop(0)
    s.append(a)
    if s == t:
        print("Yes")
        exit()

print("No")
