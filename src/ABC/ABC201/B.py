# B - Do you know the second highest mountain?
n = int(input())
arr =  list()
new_arr = []
for i in range(n):
    s, t = input().split()
    t = int(t)
    new_arr.append([s,t])

new_arr.sort(reverse=True, key=lambda x :x[1])

print(new_arr[1][0])
