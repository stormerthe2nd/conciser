function expand(sum,len){
  let baseNum = Math.floor(sum/len)
  console.log(baseNum)
  let sumArr = Array(len).fill(baseNum,0,len)
  console.log(sumArr)
  console.log(sumArr.reduce((a,b)=>a+b,0))
}

expand(40,11)