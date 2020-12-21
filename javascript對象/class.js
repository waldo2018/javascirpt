// 使用構造函數創建一個對象
function Person(first, last, age, eyecolor){
    this.first = first;
    this.last = last;
    this.age = age;
    this.eyecolor = eyecolor;
}

Person.prototype.name = function(){
    return this.first + '' + this.last;
}
var myFather = new Person("john", "Doe", 50, "blue");
console.log(myFather.name());

/*
javascript 中幾乎都是對象，在String 繼承自String.prototype ,都有原型對象，我們有時候不能夠在構造器中天劍參數，但是可以在對象的原型上添加，可以
達到同樣的效果。
 */