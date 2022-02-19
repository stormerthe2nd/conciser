

// function expandComb (n:number,arr:number[]) :string{
//   let each:number = arr[0]
//   let endArr:number[] = Array<number>(Math.floor(n / each)).fill(each)
//   let last:number = n - endArr.reduce((a, b) => a + b, 0)
//   if (last > 0) endArr.push(last)
//   console.log(endArr) 
//   return endArr.join("")
//   // expandHelper(n,endArr)
// }



expandCombinations(5)

function expandCombinations(n: number) {
  let i = 0
  let add = 1
  let arr:number[] = Array<number>(n).fill(1)
  let lastEl  = arr.length-1
  while (i<arr.length-1){
    let j = i
    let k = lastEl
    arr[0] = arr[0]+1
    arr[lastEl] = arr[lastEl]-1
    console.log(arr)
    let subArr = [...arr]
    while(j<subArr.length){
      subArr[j] = subArr[j]+1
      subArr[k] = subArr[k]-1
      console.log("inside ",subArr)
      k--
      j++
    }
    lastEl--
    i++
  }
}
