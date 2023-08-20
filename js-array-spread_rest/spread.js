// function filterOutOdds1() {
//    var nums = Array.prototype.slice.call(arguments);
//    return nums.filter(function(num) {
//      return num % 2 === 0
//    });
//  }


const filterOutOdds = (...args) =>args.filter((num)=> num % 2 === 0);

const findMin = (...args) => args.reduce((min,currNum) => min < currNum ? min : currNum);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})


const doubleAndReturnArgs = (arr, ...args)=>{
   const temp = args.map((num) => num*2);
   return [...arr, ...temp];
}

/**
 * For this section, write the following functions using 
 * rest, spread and refactor these functions to be arrow functions!
 * 
 * Make sure that you are always returning a new array or 
 * object and not modifying the existing inputs. */

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
   const removeIdx =  Math.floor(Math.random() * items.length);
   return items.filter((num,idx)=> removeIdx !== idx)
}



/** Return a new array with every item in array1 and array2. */

const extend= (array1, array2)=> [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>({...obj, [key]:val});




/** Return a new object with a key removed. */

const removeKey = (obj, key)=> {
   delete obj[key];
   return {...obj};
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    obj[key] = val;
    return obj;
}
