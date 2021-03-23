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

//
const text = 'To compose two functions together, pass the output of the first function call as the input of the second function call.'

let wordsFound = words(text)
let wordsUsed = unique(wordsFound)

console.log(wordsUsed) // should be a list of the unique words in the text

// let's connect them
wordsUsed = unique(words(text)) // see how it almost reads like a sentence?

function uniqueWords (str) {
  return unique(words(str))
}

wordsUsed = uniqueWords(text) // the output of all 3 of these are the same

// let's define a helper fn to compose 2 functions together generically
function compose2(fn2, fn1) {
  return function composed(origValue) {
    return fn2(fn2(origValue))
  }
}

var uniqueWords2 = compose2(unique, words) // first class functions! aka functions can be treated like any other value

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
