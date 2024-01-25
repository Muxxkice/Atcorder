#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;
    int ans = 0;
    bool flg = false;
    for (int i = 0; i < s.size()-2; i++) {
        if (s.substr(i, 3) == "ABC") {
            ans++;
        }
    }
    cout << ans << endl;
}
