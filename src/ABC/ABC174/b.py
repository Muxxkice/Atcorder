# B - Distance

import math
n,d = map(int, input().split())
line = [list(map(int, input().split())) for l in range(n)]

count = 0
for i in range(n):
    p = math.sqrt(line[i][0]** 2 + line[i][1]** 2)
    if p <= d:
        count += 1

print(count)
