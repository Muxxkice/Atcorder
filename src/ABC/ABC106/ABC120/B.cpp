#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

int main() {
    int a,b,c;
    cin >> a >>b >>c ;
    int count = 0;
    vector<int> vec = {};
    int n = a > b ? a : b;

    for (int i = 1; i <= n; i ++) {
        if ( a % i == 0 && b % i == 0) {
            vec.push_back(i);
        }
    }

    sort(vec.rbegin(), vec.rend());
    for (int i = 0 ; i <= vec.size(); i ++) {
        if ( i +1  == c ) {
            cout << vec[i] << endl;
            break;
        }
    }
}
