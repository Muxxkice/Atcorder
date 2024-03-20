# B - Snake Toy
a,b = list(map(int,input().split()))
line = list(map(int,input().split()))
line.sort(reverse=True)

ans = 0
for i in range(b):
    ans += line[i]

print(ans)
