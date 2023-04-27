```python
n = int(input())

if n % 4 == 2:
     print(n)
elif n % 4 < 2:
     print(n + 2 - (n % 4))
else:
     print(n+(6-n%4))

266A
text = input()

n = len(text) // 2

print(text[n])

267A
today = input()
week = {
     'Monday':5,
     'Tuesday':4,
     'Wednesday':3,
     'Thursday':2,
     'Friday':1
}
print(week[f"{today}"])

157A
157B
bing = [[int(num) for num in input().split()] for l in range(3)]
n = int(input())
t =[int(input()) for i in range(n)]

flg = False
for i in t:
     for j in range(3):
          for k in range(3):
               if i == bing[j][k]:
                    bing[j][k] = 0

for i in range(3):
     count_x = 0
     count_y = 0
     count_p = 0
     count_q = 0
     p = 0
     q = 2
     for j in range(3):
          if bing[i][j] == 0:
               count_x += 1
          if bing[j][i] == 0:
               count_y += 1
          if bing[j][p] == 0:
               count_p += 1
          if bing[j][q] == 0:
               count_q += 1
          q -= 1
          p += 1
     if count_x == 3 or count_y == 3 or count_p == 3 or count_q == 3:
          flg = True
          break

print("Yes" if flg else "No")
