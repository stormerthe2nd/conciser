
const expandCombinations = function (n, arr) {
  console.log(arr)
  var each = arr[0]
  let newArr = arr
  var end = function () {
    let endArr = []
    for (_ in [...Array(Math.floor(n / each)).keys()]) endArr.push(each)
    let last = n - endArr.reduce((a, b) => a + b, 0)
    if (last > 0) endArr.push(last)
    return endArr.toString()
  }()
  var jodi = 2

  while (end !== newArr.toString()) {
    console.log(end)
    break
  }
}


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
    expandCombinations(num, arr)
  })
}

findCombinationOf(9);