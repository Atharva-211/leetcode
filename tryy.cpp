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
    int removeDuplicates(vector<int>& nums) {
        int j = 1;
        for(int i = 1; i < nums.size(); i++){
            if(nums[i] != nums[i - 1]){
                
        }
    }
};

int main()
{
    vector<int> nums = {1,1,2,2,3,3,4,4,5};
    Solution solution;
    solution.removeDuplicates(nums);
    return 0;
}