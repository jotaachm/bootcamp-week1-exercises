const assert = require('assert')

/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */

// my first approach which was less efficient as it uses two functions
// const hasFalsyValue = obj => {
//   let values = [];
//   const hasFalsyValue2 = obj => {
//     Object.values(obj).forEach(value => {
//       if (typeof (value) === 'object') {
//         hasFalsyValue2(value);
//       } else {
//         values.push(value);
//       }
//     })
//     function returning(value) {
//       if (!value) {
//         return true;
//       }
//       return false;
//     }
//     return values.some(returning)
//   };
//   return hasFalsyValue2(obj);
// };

const hasFalsyValue = obj => {
  // will store true if a nested object contains a falsy value
  let nested;

  // we assume there are no falsy values and iterate through the object changing this boolean accordingly
  let falsyDetected = false;

  // iterate over the values for each key
  Object.values(obj).forEach(value => {
    // if one of those values is a nested object, iterate through that one again
    if (typeof (value) === 'object') {
      nested = hasFalsyValue(value)
    }
    // if any value is found to be falsy turn falsyDetected to be true
    else {
      if (!value) {
        falsyDetected = true;
      }
    }
  })
  // if any nested object contained a falsy value return true
  if (nested) {
    return true;
  }
  // else return the current value of falsyDetected
  return falsyDetected;
};

const falsyObj = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const falsyObj2 = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      nothere: 1
    }
  },
  foundme: 0
}

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(falsyObj2) === true);
assert(hasFalsyValue(truthyObj) === false);
