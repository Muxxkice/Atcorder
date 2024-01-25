#include <iostream>
#include <string>
using namespace std;

int main() {
    int n,m;
    cin >> n >> m;
    cout << (500 * n >= m ? "Yes" : "No") << endl;

}
int getDigit (int n) {
    int s =1;
    while (n > 10) {
        n /= 10
        s++;
    }
    return s
}

int main() {
    int n;
    cin >> n;
    int ans = 0;
    for(int i = 1; i <= n; i++ ){
        int size = getDigit(i);
        if(size % 2 != 0) {
            ans++;
        }
    }
    cout << ans << endl;
}
