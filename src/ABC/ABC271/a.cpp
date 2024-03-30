#include <iostream>
#include <vector>
using namespace std;
int main(void){
    int n;
    cin >> n;
    int tmp = 0;
    vector<int> vec;
    if(n == 0 ) {
        vec.push_back(0);
        vec.push_back(0);
    }
    while(n > 0) {
        tmp = n % 16;
        n = n / 16;
        vec.push_back(tmp);
    }
    if(vec.size() == 1 ) {
        vec.push_back(0);
    }
    for(int i = vec.size()-1; i >= 0; i--){
        if (vec[i] <= 9) {
            cout << vec[i];
        } else {
            cout << char(vec[i] + 55);
        }
    }
    cout << endl;

}
