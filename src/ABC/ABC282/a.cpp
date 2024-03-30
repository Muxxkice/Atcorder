#include <iostream>
#include <string>
using namespace std;
int main(void){
    int n;
    cin >> n;
    int s = 'A';
    for(int i = 0; i < n; i++) {
        cout << char(s+ i) ;
    };
}
