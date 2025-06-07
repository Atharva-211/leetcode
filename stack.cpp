#include <iostream>
#include <stdio.h>
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
    bool isValid(string s) {
        std::stack<char> a;

        for (int i = 0; i < s.size(); i++)
        {
            if ((!a.empty()) && ( (a.top() == '(' && s[i] == ')') || (a.top() == '[' && s[i] == ']') || (a.top() == '{' && s[i] == '}'))) {
                a.pop();
            }

            else
            {
                a.push(s[i]);
            }
        }
        
        return a.empty();
};
}

int main()
{
    return 0;
}