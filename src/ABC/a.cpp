#include <iostream>
using namespace std;
int main(void){
    int a,b;
    cin >> a >> b;
    int n = 0;
    for(int i = a; i <=b; i++) {
        n += 1;
    };
    cout << n << endl;
}
