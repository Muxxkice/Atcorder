# B - ss
s = list(input())

for i in range(len(s)):
    s.pop()
    if len(s) % 2 == 0:
        flg = True
        k = len(s) //  2
        for j in range(len(s) // 2):
            if s[j] != s[k]:
                flg = False
            k += 1
        if flg:
            print(len(s))
            exit()
