// ---------------------------------------------
// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("1. Reverse String:", reverseString("hello")); // olleh

// ---------------------------------------------
// 2. Check Prime Number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return true;
}
console.log("2. Prime Check:", isPrime(7)); // true

// ---------------------------------------------
// 3. Factorial (Recursion)
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("3. Factorial:", factorial(5)); // 120

// ---------------------------------------------
// 4. Count Vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let ch of str) if (vowels.includes(ch)) count++;
  return count;
}
console.log("4. Vowel Count:", countVowels("JavaScript")); // 3

// ---------------------------------------------
// 5. Find Min & Max
function findMinMax(arr) {
  let min = arr[0], max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}
console.log("5. Min & Max:", findMinMax([3, 7, 2, 8, 5]));

// ---------------------------------------------
// 6. Second Largest
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) second = num;
  }
  return second;
}
console.log("6. Second Largest:", secondLargest([10, 20, 4, 45, 99])); // 45

// ---------------------------------------------
// 7. Palindrome Check
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log("7. Palindrome:", isPalindrome("level")); // true

// ---------------------------------------------
// 8. FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
console.log("8. FizzBuzz for 1–15:");
fizzBuzz(15);

// ---------------------------------------------
// 9. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("9. Remove Duplicates:", removeDuplicates([1,2,2,3,4,4])); // [1,2,3,4]

// ---------------------------------------------
// 10. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("10. Sum of Array:", sumArray([1,2,3,4,5])); // 15

// ---------------------------------------------
// 11. Missing Number (1 to n)
function missingNumber(arr, n) {
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
console.log("11. Missing Number:", missingNumber([1,2,4,5,6], 6)); // 3

// ---------------------------------------------
// 12. Char Frequency
function charCount(str) {
  const map = {};
  for (let ch of str) map[ch] = (map[ch] || 0) + 1;
  return map;
}
console.log("12. Char Count:", charCount("hello"));

// ---------------------------------------------
// 13. Intersection of Arrays
function intersection(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}
console.log("13. Intersection:", intersection([1,2,3,4],[3,4,5,6]));

// ---------------------------------------------
// 14. Merge & Sort Arrays
function mergeAndSort(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}
console.log("14. Merge & Sort:", mergeAndSort([3,1,4],[2,5,6]));

// ---------------------------------------------
// 15. Reverse Array (Manual)
function reverseArray(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log("15. Reverse Array:", reverseArray([1,2,3,4]));

// ---------------------------------------------
// 16. Unique Element (XOR)
function findUnique(arr) {
  return arr.reduce((a, b) => a ^ b);
}
console.log("16. Unique Element:", findUnique([2,3,5,4,5,3,4]));

// ---------------------------------------------
// 17. Move Zeroes
function moveZeroes(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) [arr[i], arr[index++]] = [arr[index], arr[i]];
  }
  return arr;
}
console.log("17. Move Zeroes:", moveZeroes([0,1,0,3,12]));

// ---------------------------------------------
// 18. Majority Element (> n/2)
function majorityElement(arr) {
  const count = {};
  for (let num of arr) count[num] = (count[num] || 0) + 1;
  const n = arr.length / 2;
  for (let key in count) if (count[key] > n) return Number(key);
  return -1;
}
console.log("18. Majority Element:", majorityElement([3,3,4,2,3,3]));

// ---------------------------------------------
// 19. First Non-Repeating Char
function firstUniqueChar(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of str) if (freq[ch] === 1) return ch;
  return null;
}
console.log("19. First Unique Char:", firstUniqueChar("swiss"));

// ---------------------------------------------
// 20. Flatten Nested Array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log("20. Flatten Array:", flattenArray([1,[2,[3,[4]]]]));

// ---------------------------------------------
// 21. Check Anagram
function isAnagram(a,b){
  if(a.length!==b.length)return false;
  return a.split('').sort().join('')===b.split('').sort().join('');
}
console.log("21. Anagram:", isAnagram("listen","silent"));

// ---------------------------------------------
// 22. Reverse Each Word
function reverseWords(sentence){
  return sentence.split(" ").map(w=>w.split("").reverse().join("")).join(" ");
}
console.log("22. Reverse Words:", reverseWords("Hello World"));

// ---------------------------------------------
// 23. Even Numbers
function evenNumbers(arr){return arr.filter(n=>n%2===0);}
console.log("23. Even Numbers:", evenNumbers([1,2,3,4,5,6]));

// ---------------------------------------------
// 24. Sum of Digits
function sumOfDigits(num){return num.toString().split('').reduce((s,d)=>s+Number(d),0);}
console.log("24. Sum of Digits:", sumOfDigits(1234));

// ---------------------------------------------
// 25. Armstrong Number
function isArmstrong(num){
  const digits=num.toString().split('');
  const power=digits.length;
  const sum=digits.reduce((a,d)=>a+Math.pow(Number(d),power),0);
  return sum===num;
}
console.log("25. Armstrong:", isArmstrong(153));

// ---------------------------------------------
// 26. Capitalize Words
function capitalizeWords(str){
  return str.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}
console.log("26. Capitalize Words:", capitalizeWords("javascript is fun"));

// ---------------------------------------------
// 27. GCD and LCM
function gcd(a,b){return b===0?a:gcd(b,a%b);}
function lcm(a,b){return (a*b)/gcd(a,b);}
console.log("27. GCD:", gcd(48,18),"LCM:", lcm(4,6));

// ---------------------------------------------
// 28. Longest Word Length
function longestWordLength(sentence){
  return Math.max(...sentence.split(' ').map(w=>w.length));
}
console.log("28. Longest Word Length:", longestWordLength("I love JavaScript programming"));

// ---------------------------------------------
// 29. Perfect Number
function isPerfect(num){
  let sum=1;for(let i=2;i<=num/2;i++)if(num%i===0)sum+=i;
  return sum===num&&num!==1;
}
console.log("29. Perfect Number:", isPerfect(28));

// ---------------------------------------------
// 30. Rotate Array
function rotateArray(arr,k){k%=arr.length;return [...arr.slice(-k),...arr.slice(0,-k)];}
console.log("30. Rotate Array:", rotateArray([1,2,3,4,5],2));

// ---------------------------------------------
// 31. Is Sorted
function isSorted(arr){for(let i=1;i<arr.length;i++)if(arr[i]<arr[i-1])return false;return true;}
console.log("31. Is Sorted:", isSorted([1,2,3,4,5]));

// ---------------------------------------------
// 32. Frequency Count
function frequencyCount(arr){const map={};for(let n of arr)map[n]=(map[n]||0)+1;return map;}
console.log("32. Frequency Count:", frequencyCount([1,2,2,3,3,3]));

// ---------------------------------------------
// 33. Common Elements
function commonElements(a,b){return a.filter(x=>b.includes(x));}
console.log("33. Common Elements:", commonElements([1,2,3],[2,3,4]));

// ---------------------------------------------
// 34. Average of Array
function average(arr){return arr.reduce((a,b)=>a+b,0)/arr.length;}
console.log("34. Average:", average([1,2,3,4,5]));

// ---------------------------------------------
// 35. Leap Year
function isLeapYear(y){return (y%4===0&&y%100!==0)||y%400===0;}
console.log("35. Leap Year:", isLeapYear(2024));

// ---------------------------------------------
// 36. Remove Falsy Values
function removeFalsy(arr){return arr.filter(Boolean);}
console.log("36. Remove Falsy:", removeFalsy([0,1,false,2,'',3,null,undefined]));

// ---------------------------------------------
// 37. Intersection Count
function intersectionCount(a,b){let setA=new Set(a),setB=new Set(b),c=0;for(let v of setA)if(setB.has(v))c++;return c;}
console.log("37. Intersection Count:", intersectionCount([1,2,3],[2,3,4]));

// ---------------------------------------------
// 38. Word Count
function wordCount(str){return str.trim().split(/\s+/).length;}
console.log("38. Word Count:", wordCount("  Hello world from JavaScript  "));

// ---------------------------------------------
// 39. Power Function
function power(base,exp){let r=1;for(let i=0;i<exp;i++)r*=base;return r;}
console.log("39. Power:", power(2,5));

console.log("\n=== ✅ End of Practice Set ===");
