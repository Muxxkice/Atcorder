# B - Palace
n = int(input())
t, a = list(map(int, input().split()))
line = list(map(int, input().split()))

ans = 0
m = 0
dif = 10000000
for i in range(n):

    h = t-line[i]*0.006

    if h > a:
        m = h - a
    else:
        m = a - h
    if m < dif:
        dif = m
        ans = i + 1

print(ans)
