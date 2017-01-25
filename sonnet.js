



      // 1. Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet");
var sonnetCont = sonnet.innerHTML;



      // 2. Find and output the starting position of the word "orphans"
var orphans = sonnetCont.indexOf("orphans");
// console.log(orphans);


      // 3. Output the number of characters in the sonnet
var lengthOfSonnet = sonnetCont.length;
// console.log(lengthOfSonnet);


      // 4. Replace the first occurance of the string "winter" with "yuletide"
var replaced = sonnetCont.replace("winter" , "yuletide");
replaced = replaced.replace("winter's" , "yuletide's");



      // 5. Replace all occurances of the string "the" with "a large"
 replaced = replaced.replace(/the /gi , "a large ");



      // 6. Set the content of the sonnet div with the new string

      sonnet.innerHTML = replaced;
