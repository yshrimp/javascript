const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
// localstorage > 작은 정보를 나의 유저 컴퓨터(브라우저)에 저장하는 방법
// localstorage.setItem 키가 저장소에 존재하는 경우 값 재설정, getItem value를 알려줌
const USER_LS = "currentUser" // 변수 USER_LS의 값 = currentUser
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); // key가 currentUser고, value 입력 받아야함
}

function handleSubmit(event){
    event.preventDefault(); // event 발생했을때 새로고침 막아주는 역할
    const currentValue = input.value; 
    paintGreeting(currentValue); // 입력받은 값을 hello text의 text 자리에 넣기
    saveName(currentValue); // 저장을 안해서 이게 없으면 새로 고침시 다시 이름 물음, currentValue를 application의 value로  
}

function askForName(){ //null일 경우 이름 묻기
    form.classList.add(SHOWING_CN); // js-form에 showing
    form.addEventListener("submit", handleSubmit); // submit하면 handlesubmit 실행
}

function paintGreeting(text) { // null이 아닐 경우 hello text를 띄위기 위한 함수
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); // h4에 showing class 추가
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);  //변수 currentUSer가 localStorage에서 courrentUser의 키 값
    if(currentUser === null){ // currentUser가 없다면
        askForName(); // askForName > 그러면 js-form에 showing class 추가
    } else { 
        paintGreeting(currentUser); // 있다면 showing 제거, greetings에 showing 추가 what is your name 대신 hello text 나옴
    }
}


function init() { // loadName을 실행하는 함수
    loadName();
}

init();