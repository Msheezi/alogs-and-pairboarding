const groupAnagrams = (strs) => {
  let result = {};
  for (const word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (result[sortedWord]) {
      result[sortedWord].push(word);
    } else {
      result[sortedWord] = [word];
    }
  }
  return Object.values(result);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
//[eat, tan, nat, bat]
// [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// let strs = [""]
// [[""]]

// let strs = ["a"]
// [["a"]]

console.log(groupAnagrams(strs));

let grouped = [];

//   for (i = 0; i < strs.length; i++) {
//     let currentWord = strs[i];
//     let wordAnagrams = [strs[i]]; // ["eat"]

//     for (j = i + 1; j < strs.length; j++) {
//       console.log(strs[j]);
//       let nextWord = strs[j]; // "tea"
//       let wordAnagramsSorted = currentWord.split("").sort().join(""); // ["eat] => ["aet"]
//       let nextWordSorted = nextWord.split("").sort().join(""); // ["tea"] => ["eat"];
//       if (wordAnagramsSorted === nextWordSorted) {
//         wordAnagrams.push(nextWord);
//         strs = strs.splice(j, 1);
//         j--;
//       }
//     }

//     grouped.push(wordAnagrams);
//   }

//   return grouped;
