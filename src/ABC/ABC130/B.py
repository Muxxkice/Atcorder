n, x = list(map(int, input().split()))
arr = list(map(int, input().split()))

d = 0
ans = 0
for i in range(n+1):
    if i == 0:
        d += 0
    else:
        d += arr[i-1]
    if d <= x:
            ans += 1

print(ans)
