
const expandCombinations = function (n, arr) {
  console.log(arr)
  var each = arr[0]
  let newArr = [...arr]
  var end = function () {
    let endArr = []
    for (_ in [...Array(Math.floor(n / each)).keys()]) endArr.push(each)
    let last = n - endArr.reduce((a, b) => a + b, 0)
    if (last > 0) endArr.push(last)
    return endArr.toString()
  }()
  let loop = 1
  // newArr.toString() !== end
  let index = 1
  while (newArr[index + 1]) {
    for (_ in [...Array(loop).keys()]) {
      newArr[index] = arr[index] + arr[index + 1]
      newArr.splice(index + 1, 1)
      console.log(newArr)
      index++
    }
    if (!newArr[index + 1] && loop < each) {
      newArr = [...arr]
      index = 1
      loop++
      console.log("loop change", loop, each)
      console.log(newArr)
    }
  }
}
// 


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

findCombinationOf(8);