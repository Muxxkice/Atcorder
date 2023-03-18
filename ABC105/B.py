# B - Cakes and Donuts
n = int(input())

if n < 4:
    print("No")
    exit()
for i in range(16):
    for j in range(17):
        if (4*i + 7*j == n):
            print("Yes")
            exit()
print("No")
