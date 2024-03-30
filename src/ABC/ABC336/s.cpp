#include <iostream>
using namespace std;
int main(void){
    int n;
    cin >> n;
    string s="L";
    for(int i = 0; i < n; i++) {
        s +="o";
    }
    s += "ng";
    cout << s << endl;
}
