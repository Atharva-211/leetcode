#include <iostream>
#include <stdio.h>
#include <conio.h>
#include <string>
#include <vector>
#include <map>
#include <unordered_set>
#include <stack>
#include <queue>
#include <array>
#include <algorithm>

using namespace std;


class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        vector <int> result;
        int carry =1;

        for(int i = digits.size() -1; i <= 0 ; i--){
            if(digits[i] != 9 && carry == 1){
                result.push_back(digits[i] + 1);
                carry = 0;
            } else if(digits[i] == 9){
                result.push_back(digits[i] + 1);
                carry = 1;
            }
        }

        return result;
        
    }
};

int main()
{
    return 0;
}