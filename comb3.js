const findCombinationOf = function (num) {
  let arr1 = [];
  for (let each = 1; each <= num; each++) {
    arr1.push([each]);
    for (let i = 1; i <= num - each; i++) {
      arr1[each - 1].push(1)
    }
  }
  arr1.forEach((arr, ind) => {
    if (ind === 0) return
    extractCombinations(num, arr)
  })
}


const extractCombinations = function (arr, n) {
  console.log("starting ", arr)
  var base = [...arr]
  var each = arr[0]
  var end = function () {
    let endArr = []
    for (_ in [...Array(Math.floor(n / each)).keys()]) endArr.push(each)
    let last = n - endArr.reduce((a, b) => a + b, 0)
    if (last > 0) endArr.push(last)
    return endArr.toString()
  }()
  let longestLoop = 1
  let index = 1
  let pairs = 1
  let pairLimit = 1
  while (arr.toString() !== end) {
    longestLoop++
    if (longestLoop > 40) break

    var val = arr[index]
    for (_ in [...Array(pairLimit).keys()]) {
      val = val + arr[index + 1]
      arr.splice(index + 1, 1)
    }
    if (!val) {
      pairLimit++
      index = 1
      arr = [...base]
      console.log("continuing with " + pairLimit + " " + index)
      continue
    }
    arr[index] = val
    console.log(arr)
    // pairs++
    index++  // pushing index
  }

}


extractCombinations([4, 1, 1, 1, 1, 1, 1, 1, 1], 12);