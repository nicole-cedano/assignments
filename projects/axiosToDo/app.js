var todoList = document.getElementById('todo-container')
var putForm = document.putForm

// Get Todo List
axios.get("https://api.vschool.io/nicole/todo").then(function(response){
    var todos = response.data
    listTodos(todos)
}).catch (function(error){
    console.log(error)
})
//List items on page
function listTodos (todos){
    for (var i =0 ; i < todos.length; i++){
        var title = document.createElement('ul')
        title.textContent = todos[i].title
        todoList.appendChild(title)
    }
}

// PUT- form for new todos
putForm.addEventListener("submit", function(e){
    e.preventDefault();

    

})


