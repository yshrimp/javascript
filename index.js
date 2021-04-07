/* when you decide to variable name, must use camel case(ex. daysOfWeek) 
변수에 값 할당할 때, 변수 앞에 let, const, var가 있는데 이중에서 const를 지정하고 변수에 값을 할당하면 값을 수정 불가능하게 할 수 있다.
웬만하면 const를 쓸것
html, css와 마찬가지로 semicolon 찍기
kind of variable : string, number, float, array, object, boolean(true/false, 부등호)
How to organize those variable 
1. array > 단순 리스트일 때 유용, ["string", 1, 3.5 , array, object]
2. object > {name = "Hwang"} 라벨 달아주고 싶을 때 사용
*/

/* const nicoInfo = {
    name : "Nico",
    age : "26",
    gender : "Male",
    isHandsome : true,
    favThing : ["Game", "Clothes", "Meat"],
    favFood : [{
        name : "Cheese burger",
        fatty : true
    },
    {
        name : "Salad",
        fatty : false
}]
}

console.log(nicoInfo.favThing[0]) // access to array []
// access to object .

console.log(nicoInfo.favFood[1].fatty)
*/

 // console is object
// log is function

/*
function sayHello(name, age){ // 외부 데이터를 함수에 이용하는 법
    return `Hello ${name} you are ${age} years old`; //("hello!", name, "your age is", age);
}

 // 함수 안에 넣는 것은 인자(argument)로 변수와 유사한 것
const greetNicolas = sayHello("Nicolas", 14); //greetNicolas는 sayHello 함수의 리턴 값
console.log(greetNicolas); // return으로 안하면 greetNicolas는 정의되지 않은 변수임
*/

/*
const calculator =  { 
    multifly : function(a, b){
        return a * b
    }
}

const multifly = calculator.multifly(3, 3)
console.log(multifly) */


const myObject = {
    name : "bigtop",
    age : 345,
    phoneNumber : "010-1234-5678",
    address: "seoul"
};

console.log(myObject)

