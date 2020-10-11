// Given a string s, find the longest palindromic substring in s.

//   Example:

// Input: "babad" Output: "bab" Note: "aba" is also a valid answer.

//   Example: Input: "cbbd" Output: "bb"

/*

iterate through the string
building a substring
if it is a palidrome save it to a variable
equality check each time i insert a new value
if shorted longest pali doen'st change
if longer, longest pali changes to new string

return longest pali

*/

const longestPaliSubstring = (string) => {
  let longestPal;
  let currentSubString = "";

  for (i = 0; i < string.length; i++) {
    currentSubString += string[i];
    if (currentSubString === currentSubString.reverse()) {
      if (currentSubString.length > longestPal.length)
        longestPal = currentSubString;
    }
  }

  return longestPal;
};

console.log(longestPaliSubstring("aacbbcaacdddddcaac"));
