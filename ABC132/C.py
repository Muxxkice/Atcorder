n = int(input())
line = list(map(int,input().split()))
line.sort()
ans = 0
# p = (line[n//2-1])
# l = (line[n//2])

a = line[n//2-1]
b = line[n//2]

if a < b:
    ans = b - a

print(ans)
