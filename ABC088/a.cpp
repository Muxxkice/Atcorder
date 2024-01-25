#include <iostream>
#include <string>

using namespace std;

int main() {
  int n,a;
  cin >> n,a;
  bool flg = false;
  for(int i = 1; i <= n; i++) {
    if( (a - 1*i) % 500 == 0 ) {
      cout << "Yes" << endl;
    }
  }
  cout << "No" << endl;
}
