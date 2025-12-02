class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        vector <int> result;
        int carry =1;

        for (int i = digits.size() - 1; i >= 0; i--){
            if(digits[i] != 9 && carry == 1){
                // result.push_back(digits[i] + 1);
                result.insert(result.begin(),(digits[i] + 1));

                carry = 0; i--;
                while(i>=0){
                    result.insert(result.begin(),digits[i--]);
                } return result;
            } else if(digits[i] == 9){
                // result.push_back(digits[i] + 1);
                result.insert(result.begin(),0);
                carry = 1;
            }
            
        }
            result.insert(result.begin(),1);
        return result;
        
    }
};