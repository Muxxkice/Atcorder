# B - Card Game for Two
n = int(input())
line = list(map(int,input().split()))

a = 0
b = 0
for i in range(n):
    if i % 2 == 0:
        a += max(line)
        line.remove(max(line))

    else:
        b += max(line)
        line.remove(max(line))

if a > b:
    print(a-b)
else:
    print(b-a)


n = int(input())
line = list(map(int,input().split()))

line.sort(reverse=True)


result = 0
for i in range(n):
    if i % 2 == 0:
        result += line[i]

    else:
        result -= line[i]

print(result)
