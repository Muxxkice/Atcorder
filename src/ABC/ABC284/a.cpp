// 実行時間1m
#include <iostream>
using namespace std;
int main(void){
    int a,b;
    cin >> a >> b;
    int ans = 1;
    for(int i = 0; i < b; i++) ans *= a;
    cout << ans << endl;
}

// 実行時間2m
#include <iostream>
#include <cmath>
using namespace std;
int main(void){
    int a,b;
    cin >> a >> b;
    int ans = pow(a, b);
    cout << ans << endl;
    return 0;
}
