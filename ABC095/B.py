# B - Bitter Alchemy
n, x = list(map(int, input().split()))
line =  [int(input()) for i in range(n)]

sum_l = sum(line)
min_l = min(line)

print( n + (x-sum_l) // min_l)
