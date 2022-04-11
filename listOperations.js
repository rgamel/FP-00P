// LIST OPERATIONS

// MAP
// applying the same transformation to every item in a list

const list = [0, 1, 2, 3, 4, 5, 6, 7];

// imperatively, with side effects
const doubleList = () => {
  // this is really more a procedure than it is a function, at least according to the FP definition
  for (let i = 0; i < list.length; i++) {
    // in order to figure out what this code is doing
    // you need to execute it in your mind
    // also, this will mutate the original array
    list[i] = list[i] * 2;
  }
};

// imperatively, but as a pure function
const doubleListPure = () => {
  // locally imperative and mutating, globally pure and functional
  const results = [];
  for (let i = 0; i < list.length; i++) {
    results.push(list[i] * 2);
  }
  return results;
};
const doubleListFp = (inputList) =>
  inputList.map((item) => item * 2); /* can extract the transformation*/

// FILTER
// include only the items we want, exclude the ones we don't

// this will remove items from the original array
const onlyEvens = () => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 !== 0) {
      list.splice(i, 1);
    }
  }
};

const onlyEvensPure = () => {
  const results = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      results.push(list[i]);
    }
  }
  return results;
};

const onlyEvensFp = (inputList) => inputList.filter((item) => item % 2 === 0);

// REDUCE
// returns a single value that is the result of running a reducer callback on all list elements
const sumFromArray = () => {
  const result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
};

const sumFromArrayWithReduce = (inputList) =>
  inputList.reduce((acc, val) => {
    acc = acc + val;
  }, 0);
