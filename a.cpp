#include <iostream>
#include <string>
using namespace std;
int main(void){
    string s;
    cin >> s;
    for(int i = 0; i < s.length(); i++) {
        if (isupper(s[i])) {
            cout << i+1 << endl;
        }
    };
}
