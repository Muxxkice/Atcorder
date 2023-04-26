a = list(input())
b = list(input())

flg = False
if a == b:
     flg = True
else:
     for i in range(len(a)-1):
          a[i],a[i+1] = a[i+1],a[i]
          if a == b:
               flg = True
               break
          else:
               a[i+1],a[i] = a[i],a[i+1]

print("Yes" if flg else "No")
