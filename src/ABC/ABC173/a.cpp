#include <iostream>
using namespace std;
int main(void){
    int p;
    cin >> p;
    cout << (p % 1000 == 0 ? 0 : 1000 - p % 1000 ) << endl;
}
