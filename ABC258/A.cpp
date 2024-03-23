#include <iostream>
using namespace std;
int main(void) {
  int a,b;
  cin >> a >> b;
  bool flg = true;

  while (b > a){

    b = b / 2;
    if (b != a){
        flg = false;
    }
  }
  cout << (flg ? "Yes" : "No") << endl;

}
