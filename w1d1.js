/*Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
 judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character.
 The valid robot moves are R (Right), L (Left), U (Up) and D (down). 
 The output should be true or false representing whether the robot makes a circle.

Example
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false

*/

function makesACircle(directions) {
  let rDirs = 0;
  let uDirs = 0;

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];

    if (direction === "R") {
      rDirs++;
    } else if (direction === "L") {
      rDirs--;
    } else if (direction === "U") {
      uDirs++;
    } else if (direction === "D") {
      uDirs--;
    }
  }

  return rDirs === 0 && uDirs === 0;
}

console.log(makesACircle("RRUULDD"));
