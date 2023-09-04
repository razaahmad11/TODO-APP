var inp = document.getElementById("inp")
var list = document.getElementById("list")
var clear = document.getElementById("clear")
var todoList = [];



function addTodo() {
    if (inp.value == "") {
        alert("please enter a value")
        return;
    }
    todoList.push(inp.value)
    inp.value = ""
    render();
}




function render() {
    list.innerHTML = "";
    for (var i = 0; i < todoList.length; i++) {
        list.innerHTML += ` <div class = "list-div">  <li class = "list"   >${todoList[i]} <div><button class = "edit" onclick="editTodo(${i})"><i class="fa-solid fa-pen"></i></button> <button class = "delete" onclick="deleteTodo(${i})"><i class="fa-solid fa-trash"></i></button></div> </li></div>`;

    }
}

function editTodo(indexNum) {
    inp.value = todoList[indexNum]
    deleteTodo(indexNum)
    render();
}

function deleteTodo(indexNum) {
    todoList.splice(indexNum, 1);
    render();
}
function deleteAll() {
    todoList = []
    list.innerHTML = ""
}



