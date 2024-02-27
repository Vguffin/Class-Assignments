/******************
 * YOUR CODE HERE *
 ******************/
`xify` - returns the same string, but with every character replaced by an 'x'
    * xify('hi') -> 'xx'
    * xify('hello') -> 'xxxxx'
    

* `yellingChars` - returns the given string with an exclamation point after each character
 
    * yellingChars('gracious') -> 'g!r!a!c!i!o!u!s!'
    * yellingChars('oh hi') -> 'o!h! h!i!'
  * Hints:
    * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.


* `indexedChars` - adds the index of each character before that character in the given string
  * Examples:
    * indexedChars('hey') -> '0h1e2y'
    * indexedChars('byebye') -> '0b1y2e3b4y5e'
  * Hints: 
    * We can add something BEFORE the current character as well!


* `numberedChars` - adds the number of each character before that character in the given string
  * Examples:
    * numberedChars('hey') -> '(1)h(2)e(3)y'
    * numberedChars('byebye') -> '(1)b(2)y(3)e(4)b(5)y(6)e'
  * Hints: 
    * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!


* `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
  * Examples:
    * exclaim('How are you doing? Are you a fool?') -> 'How are you doing'
    * exclaim('This is not fine.') -> 'This is not fine!'


* `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
  * Examples:
    * repeatIt('three', 3) -> 'threethreethree'
    * repeatIt('oh hi!', 7) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'


* `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
  * Examples:
    * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
    * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."


* `ciEmailify` - creates an email from a two-part name
  * Examples:
    * ciEmailify('victoria guffin') -> 'victoria.guffin@codeimmersives.com'
    * ciEmailify('Christy Marion') -> 'christy.marion@codeimmersives.com'


* `reverse` - reverses the given string
  * Examples:
    * reverse('hannah') -> 'hannah'
    * reverse('Aya') -> 'Aya'
    

* `onlyVowels` - returns only the vowels from a word
  * Examples:
    * onlyVowels('Aya') -> 'aa'
    * onlyVowels('Victoria') -> 'ioia'
    * onlyVowels('Anthony') -> 'Aoy'

## Extra stretch goals

* `crazyCase` - returns the given string with alternating lower and upper cases
  * Examples:
    * crazyCase('hey') -> 'hEy'
    * crazyCase('multiple words') -> 'mUlTiPlE WoRdS'
    * crazyCase('YELL') -> 'yElL'
     
    
* `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
  * Examples:
    * titleCase('the lion king') -> 'The Lion King'
    * titleCase('cOde iMMerSives') -> 'Code Immersives'
     
   
    
* `camelCase` - returns the given string in camel case
  * Examples:
    * camelCase('oh Hi') -> 'ohHi'
    * camelCase('well yeah') -> 'wellYeah'
    * camelCase(' howdy there') -> 'HowdyThere'
    * 
    
    
* `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
  * Examples:
    * crazyCase2ReturnOfCrazyCase('multiple words') -> 'mUlTiPlE wOrDs'
    * crazyCase2ReturnOfCrazyCase('crazy stuff here') -> 'cRaZy StUfF hErE'



 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
