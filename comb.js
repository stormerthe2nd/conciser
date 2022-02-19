function expandCombinationsFor(n, arr) {
    expandHelper(n, arr);
}
var expandHelper = function (n, arr) {
    var each = arr[0];
    var endArr = Array(Math.floor(n / each)).fill(each);
    var last = n - endArr.reduce(function (a, b) { return a + b; }, 0);
    if (last > 0)
        endArr.push(last);
    console.log(endArr);
    // expandHelper(n,endArr)
}();
expandCombinationsFor(8, [5, 1, 1, 1]);
