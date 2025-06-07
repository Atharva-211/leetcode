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
    int romanToInt(string s) {
        int ans = 0;
        for (int i = 0; i < s.size() ; i++)
        {
            if( s[i] == 'I' && (s[i+1] == 'V' || s[i+1] == 'X')) ||
              ( s[i] == 'C' && (s[i+1] == 'L' || s[i+1] == 'C')) ||
              ( s[i] == 'C' && (s[i+1] == 'D' || s[i+1] == 'M'))
            {
                ans -= geteval(s[i]);
            } else if {
                ans += geteval(s[i]);
            }

        }

            return ans;
    }

    private:
    int geteval (char c){
        switch (c)
        {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;

        default:
            return 0;
        }
    }
};

int main()
{
    return 0;
}