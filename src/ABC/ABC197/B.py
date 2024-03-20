h,w,y,x = list(map(int, input().split()))
line = [list(input()) for l in range(h)]
x = x-1
y = y-1

count = -3

for i in range(x,w):
     if line[y][i] =="#":
          break
     else:
          count+=1

for j in range(x,-1,-1):
     if line[y][j] =="#":
          break
     else:
          count+=1

for k in range(y,h):
     if line[k][x] =="#":
          break
     else:
          count+=1

for n in range(y,-1,-1):
     if line[n][x] =="#":
          break
     else:
          count+=1

print(count)

h,w,y,x = list(map(int, input().split()))
line = [list(input()) for l in range(h)]
x = x-1
y = y-1

count = -3

for i in range(x,w):
     if line[y][i] =="#":
          break
     else:
          count+=1

for j in range(x,-1,-1):
     if line[y][j] =="#":
          break
     else:
          count+=1

for k in range(y,h):
     if line[k][x] =="#":
          break
     else:
          count+=1

for n in range(y,-1,-1):
     if line[n][x] =="#":
          break
     else:
          count+=1

print(count)
