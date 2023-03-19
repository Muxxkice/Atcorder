# B - ∵∴∵
o = list(input())
e = list(input())

n = len(e) +len(o)

line = []
j = 0
k = 0
for i in range(n):
    if i % 2 == 0:
        line.append(o[j])
        j += 1
    else:
        line.append(e[k])
        k += 1
print("".join(line))
