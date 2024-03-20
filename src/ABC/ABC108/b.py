# B - Small and Large Integers
a,b,k = list(map(int, input().split()))

min = min(b+1,a+k)
max = max(a+k,b-k+1)

for i in range (a,min):
    print(i)

for j in range (max, b+1):
    print(j)
