/* 
Variable(let, var, const) var보단 let, const가 권장됨 
const는 상수(constant)로 변수에 할당되는 값을 수정 불가능
var의 경우 버그 발생과 메모리 누수의 위험 등이 있기에 let, const가 권장된다.

변수의 이름 지을땐 camel case를 따르도록 하자 ex) daysOfWeek

변수에 여러 정보를 정렬하는 방식 - Array, Object
How to use Array > const variable = [data type, dsfsd, ....] < 자체가 value
How to access Array value > Variable[index]

How to use Object > const Variable = {key1: value1, key2: value2, ...}  < value에 이름인 key가 있음
How to access Object > Variable.key 
Object 안에  Array 쓰기 가능 그 반대도 가능

console.log와 Variable.key 유사하다. 즉 console은 browser에 원래 내장된 Object이며 log는 console의 키다. 
browser에는 다양한 Object들이 있다. ex) console, document, navigator 등

*/

/*
function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`; // 백틱을 사용하면 지저분하지 않게 코드 작성 가능!!
} 

const greeting = sayHello("hwang", 15)

console.log(greeting)
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
} // 밑에 것을 한번에 하게 만드는것이 toggle 즉 contains, add, remove 다 함 CLICKED_CLASS가 있는지 확인하고 있으면 제거 없으면 추가하고

/*
function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS); // contains는 해당 클래스가 있는지 확인하는 method
    if(hasClass){ // hasClass가 CLICKED_CLASS를 가지고 있다면
        title.classList.remove(CLICKED_CLASS); // CLICKED_CLASS 제거
    } else {
        title.classList.add(CLICKED_CLASS); // 추가
    }
}
*/

/*
function handleClick() {
    const currentClass = title.className; // currentClass란 변수의 값을 title에 class를 부여함
    if(currentClass !== CLICKED_CLASS){ // currentClass가 CLICKED_CLASS가 같지 않다면 
        title.className = CLICKED_CLASS; // class 이름을 clicked로 추가
    } else {
        title.className = ""; // 같다면 class 이름은 없음 / 없으면 초기값이 됨
    }
}
다만 이렇게 className을 쓰면 앞의 btn class는 무시되기 때문에 다른 방법인 classList를 쓴다. */

/*
const BASE_COLOR =  "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color; // 현컬러 변수화
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
*/

function init(){
   // title.style.color = BASE_COLOR; // title태그의 초기 색이 BASE_COLOR라고
    title.addEventListener("click", handleClick); // click이란 event를 listenser에게 받았을 때 handleClick 함수를 출력
} // handleClick과 handleClick()의 차이점 : ()이 붙으면 조건에 관계없이 무조건 출력임

init();

const hi = document.querySelector("h2")

hi.className = "fuck" //h2에 fuck이라는 클래스 추가