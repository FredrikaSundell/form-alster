const form = document.querySelector('#form')
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e)

  const firstname = e.target.elements.firstname.value
  const lastname = e.target.elements.lastname.value
  const season = e.target.elements.season.selectedOptions[0].innerText
  const seasonData = e.target.elements.season.selectedOptions[0].value

  console.log(seasonData)

  if (!firstname || !lastname || !seasonData) {
    console.log('saknar värden')
    return
  }
  createTodo(firstname, lastname, season)
})

let todoItems = []

const createTodo = (firstname, lastname, season) => {
  const newTodo = {
    firstname,
    lastname,
    season,
    id: Date.now(),
  }
  todoItems.push(newTodo)
  updateList()
}

const updateList = () => {
  let newListHTML = ''

  todoItems.forEach((item) => {
    newListHTML += `<li data-id='${item.id}'>${item.firstname} ${item.lastname} ${item.season}<button class='delete-button'>x</button></li>`
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
