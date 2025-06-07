#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        int length = 0, i = s.size() - 1;

        // Skip trailing spaces
        while (i >= 0 && s[i] == ' ') {
            i--;
        }

        // Count the length of the last word
        while (i >= 0 && s[i] != ' ') {
            length++;
            i--;
        }

        return length;
    }
};

int main()
{
    string input = "hello world"; // Renamed 'try' to 'input' and fixed initialization
    Solution solution;
    cout << solution.lengthOfLastWord(input) << endl; // Output the length of the last word
    return 0;
}
