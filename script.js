const form = document.querySelector('#form')
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e)

  const firstname = e.target.elements.firstname.value
  const lastname = e.target.elements.lastname.value
  console.log(firstname, lastname)

  if (!firstname || !lastname) {
    console.log('saknar värden')
    return
  }
  createTodo(firstname, lastname)
})

let todoItems = []

const createTodo = (firstname, lastname) => {
  const newTodo = {
    firstname,
    lastname,
    id: Date.now(),
  }
  todoItems.push(newTodo)
  updateList()
}

const updateList = () => {
  let newListHTML = ''

  todoItems.forEach((item) => {
    newListHTML += `<li data-id='${item.id}'>${item.firstname} ${item.lastname}<button class='delete-button'>x</button></li>`
  })
  list.innerHTML = newListHTML

  updateButtons()
}

const updateButtons = () => {
  const buttons = document.querySelectorAll('.delete-button')

  buttons.forEach((button) => {
    button.addEventListener('click', deleteListItem)
  })
}

const deleteListItem = (e) => {
  const todoToDelete = e.target.parentElement.dataset.id
  console.log(todoToDelete)
  const filteredItems = todoItems.filter((item) => {
    return item.id !== parseInt(todoToDelete)
  })
  console.log(filteredItems)

  todoItems = filteredItems

  updateList()
}
