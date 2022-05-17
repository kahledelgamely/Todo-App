const form = document.getElementById("form")
const input = document.getElementById("input")
const todos = document.getElementById("todos")

const todosArr = JSON.parse(localStorage.getItem("todos"))

if(todosArr){
    todosArr.forEach(todo=>{
        addTodo(todo);
    })
}


form.addEventListener("submit", (e)=>{

    e.preventDefault();

    addTodo();
})

function addTodo(todo){
    let inputText = input.value;

    if(todo){
        inputText = todo.text;
    }
    if(inputText){
        const liEl = document.createElement("li")
        if(todo && todo.completed){
            liEl.classList.add("completed")
        }
    

    liEl.innerHTML = inputText

    liEl.addEventListener("contextmenu", ()=>{
        liEl.remove()
        addToLs();
    })
    liEl.addEventListener("click", ()=>{
        liEl.classList.toggle("completed")
        addToLs();
    })
    todos.appendChild(liEl)
    input.value = ""
    addToLs();
    }
}


function addToLs(){

    const liELs = document.querySelectorAll("li")

    const todos = []

    liELs.forEach(liEL=>{
        todos.push({
            text:liEL.innerHTML,
            completed: liEL.classList.contains("completed")
        })
    })

    localStorage.setItem("todos", JSON.stringify(todos))

}


