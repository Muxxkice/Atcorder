# B - Break Numbe
n = int(input())+1

ans = 1
result = 0
for i in range(1,n):
    j = i
    num = 0
    while j % 2 == 0:
        j //= 2
        num += 1
    if num > result:
        result = num
        ans = i
print(ans)
