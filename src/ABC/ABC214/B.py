s,t = list(map(int, input().split()))

flg = True

count = 0
for i in range(s+1):
     for j in range(s+1-i):
          for k in range(s+1-i-j):
               if i + j + k <= s and i * j * k <= t:
                    count += 1
print(count)
