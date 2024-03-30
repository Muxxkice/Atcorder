#include <iostream>
using namespace std;
int main(void){
    int a,b,c;
    cin >> a >> b >> c;
    int n = a*100 + b*10 + c;
    cout << (n % 4 == 0 ? "YES" : "NO") << endl;
}
