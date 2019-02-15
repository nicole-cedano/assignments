const todoListContainer = document.getElementById('todo-list-container')
const postForm = document["post-form"]

// Get Todo List
function getData() {
    axios.get("https://api.vschool.io/nicole/todo").then(response => {
        const todos = response.data
        listTodos(todos)
    }).catch(error => console.log(error))
}
//List items on page
function listTodos(todosArr) {
    for (let i = 0; i < todosArr.length; i++) {
        //Create
        const todoContainer = document.createElement('div')
        const title = document.createElement('h2')
        const description = document.createElement('ul')
        const price = document.createElement('ul')
        const imgUrl = document.createElement('img')
        //if completed slash that shhhhh
        if (todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }
        //Edit Content
        title.textContent = todosArr[i].title
        description.textContent = todosArr[i].description
        price.textContent = todosArr[i].price
        imgUrl.setAttribute("src", todosArr[i].imgUrl)
        todoContainer.classList.add('todo-container')

        //Show By Appending
        todoContainer.appendChild(title);
        todoContainer.appendChild(description);
        todoContainer.appendChild(price);
        todoContainer.appendChild(imgUrl);
        todoListContainer.appendChild(todoContainer);

    }
}

// POST- form for new todos
postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var newTodo = {
        title: postForm.title.value,
        description: postForm.description.value,
        price: postForm.price.value,
        imgUrl: postForm.images.value,
        completed: postForm.complete.value
    }
    //reset form
    postForm.title.value = ""
    postForm.description.value = ""
    postForm.price.value = ""
    postForm.images.value = ""
    postForm.complete.value = ""
    //post todo 
    axios.post("https://api.vschool.io/nicole/todo", newTodo).then(response => {
        todoListContainer.innerHTML = ""
        getData()
    }).catch(err => console.log(err))
})
getData()


