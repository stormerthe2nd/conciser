function expandCombinationsFor(n,arr) {

  expandHelper(n,arr)
  
}

var expandHelper = function (n,arr) {
  let each = arr[0]
  let endArr = Array(Math.floor(n / each)).fill(each)
  let last = n - endArr.reduce((a, b) => a + b, 0)
  if (last > 0) endArr.push(last)
  console.log(endArr) 
  // expandHelper(n,endArr)
}()

expandCombinationsFor(8,[5,1,1,1])