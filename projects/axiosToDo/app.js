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
    console.log(todosArr)
    todoListContainer.innerHTML = ``
    for (let i = 0; i < todosArr.length; i++) {
        //Create
        const todoContainer = document.createElement('div')
        const title = document.createElement('h2')
        const description = document.createElement('ul')
        const price = document.createElement('ul')
        const imgUrl = document.createElement('img')
        const checkBox = document.createElement('div')
        const completeQ = document.createElement('h5')
        const completeBox = document.createElement('INPUT')
        const completed = document.createElement('h5')
        const deleted = document.createElement("button")

        //if completed slash that shhhhh
        if (todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }
        //Edit Content
        title.textContent = todosArr[i].title
        description.textContent = todosArr[i].description
        price.textContent = `$${todosArr[i].price}`
        imgUrl.setAttribute("src", todosArr[i].imgUrl)
        todoContainer.classList.add('todo-container')
        todoContainer.setAttribute("id", todosArr[i]._id)
        checkBox.classList.add('check-box-container')
        completeBox.setAttribute('type', 'checkbox', "complete?")
        completeQ.textContent = "Please check if complete:"
        completeBox.addEventListener("click", toggleCompleted)
        completed.textContent = todosArr[i].completed
        deleted.textContent = "DELETE"

        //Show By Appending
        todoContainer.appendChild(title);
        todoContainer.appendChild(description);
        todoContainer.appendChild(price);
        todoContainer.appendChild(imgUrl);
        todoContainer.appendChild(checkBox);
        checkBox.appendChild(completeQ);
        todoContainer.appendChild(completeBox);
        todoListContainer.appendChild(todoContainer);
        todoContainer.appendChild(completed)
        todoContainer.appendChild(deleted)
        console.log(todosArr[i]._id)

        // DELETE BUTTON FUNCTION    
        deleted.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(`https://api.vschool.io/nicole/todo/${todosArr[i]._id}`)
            axios.delete(`https://api.vschool.io/nicole/todo/${todosArr[i]._id}`).then(response => {
                alert(`Your todo was successfully deleted!`)
                getData()
            }).catch(err => {
                alert(`There was a problem deleting your todo! :(`)
            })
    })
  }  // POST- form for new todos
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();

        var newTodo = {
            title: postForm.title.value,
            description: postForm.description.value,
            price: postForm.price.value,
            imgUrl: postForm.images.value,
        }
        //reset form
        postForm.title.value = ""
        postForm.description.value = ""
        postForm.price.value = ""
        postForm.images.value = ""
        // postForm.complete.value = ""
        //post todo 
        axios.post("https://api.vschool.io/nicole/todo", newTodo).then(response => {
            todoListContainer.innerHTML = ""
            getData()
        }).catch(err => console.log(err))
    })
}


    ///////
    /////////PUT part 1
    /////
    function toggleCompleted  (event)  {
        event.preventDefault()
        let id = event.target.parentNode.id
        const completedValue = event.target.parentNode.childNodes[6].textContent
        console.log(completedValue)
        if (completedValue === 'true') {
            const updatedObject = {
                completed: false
            }
            axios.put(`https://api.vschool.io/nicole/todo/${id}`, updatedObject).then(response => {
                //  console.log(event.target.checked)
                todoListContainer.innerHTML = ""
                getData()
            }).catch(err => console.log(err))
        } else if (completedValue === 'false') {
            const updatedObject = {
                completed: true
            }
            axios.put(`https://api.vschool.io/nicole/todo/${id}`, updatedObject).then(response => {
                todoListContainer.innerHTML = ""
                getData()
            }).catch(err => console.log(err))
        }
    }

 getData()
