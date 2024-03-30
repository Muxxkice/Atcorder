#include <iostream>
using namespace std;
int main(void){
    int a,b;
    cin >> a >> b;
    cout << max(a+b,max(a-b,a*b)) << endl;
}
#include <iostream>
using namespace std;
int main(void){
    int a,b;
    cin >> a >> b;
    int ans = 0;
    if( 6 <= a && a <= 12 ){
        ans = b/2;
    } else if ( a >= 13) {
        ans = b;
    }
     cout << ans << endl;
}
