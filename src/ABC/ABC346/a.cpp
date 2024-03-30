#include <iostream>
#include <vector>
using namespace std;
int main(void){
    int n;
    cin >> n;
    vector<int> vec(n);
    int a;
    for(int i = 0; i < n; i++){
       cin >> vec[i];
    }
    for(int i =0; i< n-1; i++){
        cout << vec[i]*vec[i+1] <<(i != n-1 ? " " : "/n") ;
    }
}
