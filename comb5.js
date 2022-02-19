function expandComb(n, arr) {
    var each = arr[0];
    var endArr = Array(Math.floor(n / each)).fill(each);
    var last = n - endArr.reduce(function (a, b) { return a + b; }, 0);
    if (last > 0)
        endArr.push(last);
    console.log(endArr);
    return endArr.join("");
    // expandHelper(n,endArr)
}
expandCombinations(8, [5, 1, 1, 1]);
function expandCombinations(n, arr) {
    console.log(n, arr);
}
