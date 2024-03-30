#include <iostream>
using namespace std;
int main(void){
    int h, w;
    cin >> h >> w ;
    int ans = 0;
    for(int i = 0; i < h; i++){
        string line;
        cin >> line;
        for (int j = 0; j < w ; j++) {
            if (line[j] == '#'){
                ans++;
            }
        }
    }
    cout << ans << endl;

}
