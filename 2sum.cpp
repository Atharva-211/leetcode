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
    vector<int> twoSum(vector<int>& nums, int target) {
        vector <int> result;
       // sort(nums.begin(),nums.end());

       // int ans;
        for (int i = 0; i < nums.size() ; i++)
        {
            for (int j = i+1; j < nums.size(); j++)
            {
                //ans = i+j;
                if (nums[i] + nums[j] == target)
                {
                    result.push_back(i);
                    result.push_back(j);
                    return result;  
                } 
            }
            
        }
        return result;
    }
};

int main()
{
    return 0;
}