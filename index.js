// PURE FUNCTIONS crash course
{ // imperative, with side effect
  const helloWorld = () => {
    console.log('Hello, world!')
  }

  helloWorld() // Hello, world!
}

{ // pure function - no implicit causes or effects, everything is explicit
  const helloFp = () => 'Hello, world!'

  // move the imperative/side effects out of the function and to the call site to make it more Functional
  console.log(helloFp()) // Hello, world!
}

{ // a 'real-er' example of the same idea:
  let someVar = { value: 0 }

  const incrementSomeValue = () => {
    someVar.value++
  }

  incrementSomeVar()

  console.log(someVar) // 1? are you sure? what if incrementSomeVar is being called somewhere else in the program?
}

{ // more FP now
  let otherVar = 0

  const increment = ({ value }) => ({ value: value += 1 })

  console.log(increment(someVar)) // we can be confident this is 1 because we created a new object with a value property of 1.
}

{ // side causes
  const config = { cutoff = 3 }
  const nums = [1, 2, 3, 4]

  // no side effects, but one side cause: depending on config
  const getFavesWithSideCause = (values) => {
    let results = []
    for (value in values) {
      if (value >= config.cutoff) {
        results.push(values)
      }
    }
    return results
  }
}

{ // without side causes now
  const getFavesPure = (values, cutoff) => values.filter(v => v >= cutoff)
  console.log(
    getFavesPure(nums, config.cutoff)
  ) // [3, 4]
}

{  // refactor a bit
  function highPass(cutoff) {
    return function isGte(value) { // HOF -- returns a function
      return value >= cutoff
    }
  }

  const gteCutoff = highPass(config.cutoff)

  const getFavesPure = (values) => values.filter(gteCutoff) // Writing functions without mention of the arguments is called point-free 

  console.log(
    getFavesPure(nums)
  )
}

const tldr = `FP is not an all-or-nothing proposition.
    Experimenting with making functions more pure
    and composable can do wonders for your code.`