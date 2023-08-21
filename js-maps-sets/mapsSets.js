//quesiton1
// {1,2,3,4};

//question 2
//"ref"

//question 3
//{[1,2,3]=> true
// [1,2,3]=> false}

//hasDuplicate
const hasDuplicate = (array) => new Set(array).size !== array.length

//vowelCount
function vowelCount(str){
   const vowels = 'aeiou';
   const result = new Map();
   for(let letter of str.toLowerCase()){
      if(vowels.indexOf(letter)!== -1){
         result.has(letter) ? result.set(letter, result.get(letter)+1) : result.set(letter, 1);
      }
   }
   return result;
}

console.log(vowelCount('awesomeuuuuU'));
