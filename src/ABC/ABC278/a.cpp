#include <iostream>
#include <vector>
using namespace std;
int main(void){
    int n,k;
    cin >> n >> k;
    vector<int> vec;
    int num = 0;
    for (int i = 0; i < n; i++){
       cin >> num;
	   vec.push_back(num);
    }
    for (int i = 0; i < k; i++){
      vec.push_back(0);
    }
    for (int i = k; i < n+k; i++){
      cout << vec[i] << (i == n+1 ? "\n" : " ");;
    }

}
