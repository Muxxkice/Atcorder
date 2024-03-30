#include <iostream>
using namespace std;
int main(void){
    string s;
    cin >> s;
    char a;
    char majority = s[0] == s[1] ? s[0] : s[2]; //3文字中、前２つが同じならそれが多数派、前２つが違うなら残り一つは必ず多数派
    for(int i; i < s.length(); i++) {
        if(majority != s[i]) {
            cout << i+1 << endl;
        }
    }

}
