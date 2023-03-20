# B - Palindromic Numbers
a,b = list(map(int,input().split()))

ans = 0
for i in range(a,b+1):
    if str(i) ==  "".join(reversed(str(i))) :
        ans += 1


print(ans)
