#include <iostream>
using namespace std;
int main(void){
    int n,x,t;
    cin >> n >> x >> t;
    int ans = 0;
    int sum = 0;
    while (sum < n) {
        sum += x;
        ans += t;
    }
    cout << ans << endl;
}
