# 200th ABC-200

n,k = list(map(int,input().split()))


while k > 0:
    if n % 200 == 0:
        n //= 200
    else:
        n = int(str(n)+"200")
    k -=1

print(n)
