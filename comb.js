const expandCombinations = function (n, arr) {
  console.log(arr)
  var each = arr[0]
  let newArr = arr
  let skip = 2
  let index = 1
  for (let i in [...Array(Math.floor(n / each)).keys()]) {
    let index2 = 1
    while (index2 < each) {
      newArr[index] = arr[index] + arr[index + index2]
      delete newArr[index + index2]
      if (newArr.filter(Number).length > 1) console.log(newArr.filter(Number))
      index2++
    }
    skip++
    index = index + skip
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

findCombinationOf(8);