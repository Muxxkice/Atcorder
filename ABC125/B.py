a,b = input().split()

def test(n,m):
     result = ""
     for i in range(int(n)):
          result = result + m
     return result

if test(a,b) < test(b,a):
     print(test(a,b))
else:
     print(test(b,a))
