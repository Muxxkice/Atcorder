# B - Great Ocean View
n = int(input())
line =  list(map(int, input().split()))
ans = 0
m = line[0]
for i in range(n):
    if m <= line[i]:
        ans += 1
        m = line[i]
print(ans)
