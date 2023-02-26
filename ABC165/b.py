n = int(input())
result = 0
date = 0

while result <= n:
    date += 1
    result += date
    if result>= n:
        break


print(date)
