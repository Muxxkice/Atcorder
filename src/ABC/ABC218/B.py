# B - qwerty
line = list(map(int,input().split()))

for i in range(len(line)):
    line[i] = chr(96 + line[i])

print("".join(line))
