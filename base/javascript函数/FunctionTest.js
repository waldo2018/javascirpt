// 函數聲明 函數在聲明之後並不會被使用，直到調用
function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(5, 2));

// 函數表達式
var x = function (a, b) {
    return a * b;
}
console.log(x(12, 5));

// 函數構造函數function（）
var myFunction2 = new Function('a', 'b', "return a * b");
console.log(myFunction2(12, 2));

// 函數提升
