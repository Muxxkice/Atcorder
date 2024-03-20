#include <iostream>
#include <string>
using namespace std;

int main() {
    int colum,line;
    cin >> colum >> line;
    for (int i = 0; i < colum+2; i++) {
        if (i == 0 || i == colum+1) {
            cout << string(line + 2, '#') << endl;
        } else {
            string s;
            cin >> s;
            cout << "#" << s <<"#" << endl;
        }
    }
}
