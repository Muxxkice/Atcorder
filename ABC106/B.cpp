
#include <iostream>
using namespace std;

int getDivisor(int n) {
    int divisor = 0;
    for(int i = 1; i <= n ; i++) {
        if ( n % i == 0 ) {
            divisor++;
        }
    }
    return divisor;
}
int main() {
    int n;
    cin >> n ;
    int ans = 0;
    for (int i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            int divisor = getDivisor(i);
        if (divisor == 8) {
            ans++;
        }
        }
    }
    cout << ans << endl;
}

