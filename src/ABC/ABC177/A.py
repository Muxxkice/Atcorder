d,t,s = list(map(int, input().split()))
time = 0
if d % s == 0:
     time = d //s
else:
     time = d // s +1

print("Yes" if time <= t else "No")
