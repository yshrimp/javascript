const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";



let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function filterFn(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li"); // li를 생성
    const delBtn = document.createElement("button"); // 버튼 생성
    delBtn.innerText = "❌"; 
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span"); // span 생성
    const newId = toDos.length + 1;
    span.innerText = text // text가 currentValue가됨
    li.appendChild(span);  // span을 li의 자식으로?
    li.appendChild(delBtn); // ""
    li.id = newId;
    toDoList.appendChild(li); // li를 ul의 자식으로?
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}



function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); // toDos의 value값이 const toDos의 값 없으면 null
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function something(toDo) {
            paintToDo(toDo.text);
        });
    } 
}


function init() { // loadtodos와 handlesubmit 실행
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit) 
}

init();
