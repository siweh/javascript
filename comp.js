const composition = (a, b, c, d) => (data) => a(b(c(d(data))))

const multp1 = (num) => {
    return num * 1;
}

const multp2 = (num) => {
    return num * 2;
}

const multp3 = (num) => {
    return num * 3;
}

const multp4 = (num) => {
    return num * 4;
}

const getNumber = composition(multp4, multp3, multp2, multp1);

console.log(getNumber(2));

//Create a max character to check which letter in a string occurs the most

const compose = (a, b) => (data) => a(b(data))

const stringToObj = (str) => {
    var obj = {}
    for (var char of str){
        obj[char] = obj[char] + 1 || 1;     //This one will make object tree for us
    }
    console.log(obj);
    return obj;
}

// //here is the function that will check for a repeated letter in a  string
const getMax = (obj) => {
    var max = 0;
    var results;

    for (var letter in obj){
        if (obj[letter] > max){
            max = obj[letter];
            results = letter;
        }
    }
    return results;
}

const getMaxLetter = compose(getMax, stringToObj);
const str = 'Hello World';
// // console.log(getMax(stringToObj(str)));      //Either display it like this
console.log(getMaxLetter(str));     //Or like this

//This is another way to do the composition function
var compose = function(funct1, funct2){
    return function(data){
        return funct1(funct2(data))
    }
}

var double = function(number){
    return number * 2;
}

var triple = function(number){
    return number * 3
}

var composed = compose(double, triple)
console.log(composed(2));

