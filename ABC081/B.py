# B - Shift only
n = int(input())
line = list(map(int,input().split()))

flg = True
count = 0

while flg:
    for index,l in enumerate(line):
        if l % 2 == 0:
            line[index] = l / 2
        else:
            flg = False
            break
    if flg:
            count += 1

print(count)
