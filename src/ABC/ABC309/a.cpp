#include <iostream>
using namespace std;
int main() {
	int a,b;
	cin >> a >> b;
	bool flg = false;
	if (a % 3 != 0 && a + 1 == b) {
	    flg = true;
	}
	cout << (flg ? "Yes" : "No") << '\n';
}
