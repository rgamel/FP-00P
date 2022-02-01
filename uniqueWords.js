// FUNCTION COMPOSITION CRASH COURSE

// first, some functions:
function words(str) { // returns words from a string in an array
  return String(str)
    .toLowerCase()
    .split(/\s|\b/)
    .filter(function alpha(v) {
      return /^[\w]+$/.test(v)
    })
}

function unique(list) { // return unique items in a list
  const uniqueList = []

  for (let v of list) {
    // value not yet in new list?
    if (uniqueList.indexOf(v) === -1) {
      uniqueList.push(v)
    }
  }

  return uniqueList
}

// now, our text
const text = 'To compose two functions together, pass the output of the first function call as the input of the second function call.'

// OK, let's get composing
let wordsFound = words(text)
let wordsUsed = unique(wordsFound)

console.log(wordsUsed) // should be a list of the unique words in the text

// let's connect them
let wordsUsed = unique(words(text)) // see how it almost reads like a sentence?

// we can define a function that returns the outpot of the above composition
function uniqueWords (str) {
  return unique(words(str))
}

let wordsUsed = uniqueWords(text) // the 3 values of wordsUsed are the same

// let's define a helper fn to compose 2 functions together generically
function compose2(fn2, fn1) {
  return function composed(origValue) {
    return fn2(fn1(origValue))
  }
}

const uniqueWords2 = compose2(unique, words) // first class functions! aka functions can be treated like any other value

// for any number of functions:
function compose(...fns) {
  return function composed(result) {
    // shallow copy the list so as not to mutate
    var list = [...fns]

    while(list.length > 0) {
      // take the last function off the list and execute it
      result = list.pop()(result)
    }

    return result
  }
}
