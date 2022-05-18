const toDoForm = document.querySelector("#todo-form"); // html에서 해당아이디 부분을 가져와 저장 아래도 마찬가지
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const USERTODO_KEY = "userTodo_key";
let toDos = []; // todo가 저장될 배열 삭제할 때 사용하기 위함

function deleteToDo(event) {
  // todo삭제 함수
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); // 함수없이 하는 화살표함수
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(USERTODO_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // 19-23줄 li와 span, button 생성
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // x버튼 클릭시 todo삭제함수 호출
  li.appendChild(span); // 26-27줄 li에 span과 button을 자식노드로 붙임
  li.appendChild(button);
  toDoList.appendChild(li); // todoList (3줄) 에 li를 자식노드로 붙임 따라서 html 내의 id가 todo-list인
  // ul태그를 가져와 그 안에 li를 todo작성시마다 생성함
}

function handleToDoSubmit(event) {
  // todo입력값을 submit했을 때 발생하는 함수
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); // html에서 id가 todo-form인 form을 가져와 submit

const savedToDos = localStorage.getItem(USERTODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
