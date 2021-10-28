## Tests

#### Function numberFinder()
>This function will determine what category the inputted number falls into; 1's, 10's, 100's, or 1000's

Test: "It will determine the length of the inputted number"
Code:
number = "1";
numberFinder(number);
Expected Output: 1

Test: "It will catergorize the inputted number bases on it's length."
Code:
number = "1"
numberFinder(number);
Expected Output: ones

#### Function onesCoversion()
> This function will take any number from the ones category and covert it into it's corresponding roman numeral

Test: "It will determine the value of the number."
Code:
number = "5";
onesConversion(number);
Expected Output: 5

Test: "It will determine what symbol corresponds with each number's value."
Code: 
number = "5";
onesConversion(number);
Expected Output: V

Test: "It will replace the inputted number with it's corresponding roman numeral."
Code:
number = "4";
onesConversion(number);
Expected Output: IV

Test: "It will return the converted value to the user."
Code:
number = "6";
onesConversion(number);
Expected Output: VI

