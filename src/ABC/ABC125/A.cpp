#include <iostream>
using namespace std;
int main(void){
    int p;
    cin >> p;
    cout << (p % 2 == 0 ?  p / 2 : p /2 +1 ) << endl;
　　下記でもよい
　　cout << (p+1) / 2 << endl;

}
