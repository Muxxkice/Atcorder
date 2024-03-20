t_hp, t_power, a_hp, a_power = list(map(int,input().split()))
flg = True

while flg:
    a_hp = a_hp - t_power
    if a_hp <= 0:
        flg = False
        break
    t_hp = t_hp - a_power
    if t_hp <= 0:
        flg = False
        break

print("Yes" if t_hp > a_hp else "No")
