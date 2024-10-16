const myForm = document.getElementById("formInput")

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const myInput = document.querySelector('input')
  
const task = document.createElement("li")
task.innerText = myInput.value
const save = document.getElementById("savedTask")
save.appendChild(task)


task.addEventListener('click', (e)=>{
   task.style.textDecoration = "line-through" 
})
const deleteButton = document.createElement("button")
deleteButton.innerText = "Rimuovi"
task.appendChild(deleteButton)
deleteButton.style.fontSize = "25px"
deleteButton.style.marginLeft = "2em"
deleteButton.style.borderRadius = "15px"
deleteButton.style.color = "red"
deleteButton.addEventListener ("click", (e)=>{
e.stopPropagation()
save.removeChild(task)
})
})




