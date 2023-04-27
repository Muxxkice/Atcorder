s = list(input())
t = list(input())

ans = 1000000
for i in range(len(s)):
     count = 0
     if len(s[i:]) >= len(t):
          for j in range(len(t)):
               if(t[j] != s[i+j]):
                    count += 1
          if count < ans:
               ans = count
print(ans)
