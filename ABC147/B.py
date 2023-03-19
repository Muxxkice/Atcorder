# B - Palindrome-philia
text = list(input())
j = len(text)-1
ans = 0
for i in range(len(text)//2):
    if text[i] != text[j]:
        ans += 1
    j -= 1

print(ans)
