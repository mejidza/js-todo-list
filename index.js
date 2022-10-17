let input = document.getElementById("enterYTInput")
let addButton = document.getElementById("addButton")
let list = document.getElementById("list")

addButton.addEventListener("click", () => {
    let value = input.value
    if (value === "") {
        alert("Введите текст!")
        return
    }
    let newElement = document.createElement("li")
    newElement.innerText = value
    newElement.classList.add("todo-item-list")
    let deleteButton = document.createElement("button")
    let confirmButton = document.createElement("button")
    let deleteImage = document.createElement("img")
    let confirmImage = document.createElement("img")
    let buttonContainer = document.createElement("div")
    deleteButton.addEventListener("click", () => {
        newElement.remove()
    })
    confirmButton.addEventListener("click", () => {
        newElement.classList.add("done-todo")
    })
    deleteImage.src = "./img/delete-button-image.png"
    confirmImage.src = "./img/confirm-button-image.png"
    deleteImage.classList.add("delete-image")
    confirmImage.classList.add("confirm-image")
    deleteButton.classList.add("todo-delete-button")
    confirmButton.classList.add("todo-confirm-button")
    buttonContainer.classList.add("buttons")
    deleteButton.append(deleteImage)
    confirmButton.append(confirmImage)
    buttonContainer.append(deleteButton)
    buttonContainer.append(confirmButton)
    newElement.append(buttonContainer)
    list.append(newElement)
}) 

