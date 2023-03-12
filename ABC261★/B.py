# AtCoder Beginner Contest 261
n = int(input())

list = [list(input()) for l in range(n)]

for i in range(n):
    for j in range(n-1):
        if i == j: continue
        if list[i][j] == "W":
            if list[j][i] != "L":
                print("incorrect")
                exit()
        elif list[i][j] == "L":
            if list[j][i] != "W":
                print("incorrect")
                exit()
        elif list[i][j] == "D":
            if list[j][i] != "D":
                print("incorrect")
                exit()

print("correct")
