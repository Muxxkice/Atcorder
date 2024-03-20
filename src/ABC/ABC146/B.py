# B - ROT N
n = int(input())
t = input()

def next_char(text,num):
    text = list(text)

    for i in range(len(text)):
        n_t = int(ord(t[i])) + n
        if n_t <= 90:
            text[i] = chr(n_t)
        else:
            text[i] = chr(n_t-26)
    print("".join(text))

next_char(t,n)
