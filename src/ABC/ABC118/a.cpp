#include <iostream>
using namespace std;
int main(void){
    int a,b;
    cin >> a >> b;
    cout << ( b % a == 0 ? a + b : b - a )<< endl;
}
