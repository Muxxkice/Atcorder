# B - Factorial Yen Coin
from math import factorial
p = int(input())

ans = 0

for i in range(10,0,-1):
    # print(i,factorial(i))
    while factorial(i) <= p:
        ans += 1
        p -= factorial(i)

print(ans)
