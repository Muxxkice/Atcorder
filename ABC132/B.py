n = int(input())
line = list(map(int,input().split()))

ans = 0
for i in range(n-2):
    l = line[i:i+3]
    p = l[1]
    l.sort()
    if p == l[1]:
        ans +=1

print(ans)
