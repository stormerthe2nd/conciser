function possibilities(num) {
  var i = 1
  console.log(`number ${i} will be adding ${i}, ${num} times`)
  for (i; i < num - 1; i++) {
    console.log(`number ${i + 1} is:`)
    j = i
    numSumArr = []
    do {
      numSumArr.push(1)
      j++
    } while (j < num)
    while (numSumArr.reduce((a, b) => a + b, 0) != num) {
      numSumArr[0] = numSumArr[0] + 1
    }
    console.log("possibility ", ...numSumArr, ` =${num}`)
    var cloneArr = []
    var highest = cloneArr[0]
    for (let index = 0; index < numSumArr.length; index++) {
      if (index % 2 == 0) {
        cloneArr.push([numSumArr[index], numSumArr[index + 1]])
      }
    }
    console.log(cloneArr)
    cloneArr.forEach(el => {
      if (el[1] == undefined) el[1] = 0
      el = [el[0] + el[1]]
      console.log(el)
    })

    console.log("--end--")
  }
}

possibilities(13)