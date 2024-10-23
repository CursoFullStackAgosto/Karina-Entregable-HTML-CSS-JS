const inputTask = document.getElementById ("todo-input");
const buttonAddTask = document.getElementById ("add-task");
const todoList = document.getElementById ("todo-list");

const createTask = () => {    
    if (inputTask.value.length === 0 || inputTask.value === " " || inputTask.value.trim() === "")
    {inputTask.value = ""
    return alert("Ingresa tu tarea")}

    const liElement = document.createElement("li")
    //comando para que pueda ver el checkbox
    liElement.innerHTML= `<input type="checkbox" /> <span>${inputTask.value}</span>`      
    
//comando para que al darle click al boton de borrar, se borre la tarea
liElement.innerHTML = '<input type="checkbox" />' + '<span>' + inputTask.value + '</span>' +
//'<i class="fa-solid fa-trash"></i>'
'<button class="delete-button">Borrar</button' //+ inputTask

    //comando para que al darle click al checkbox, y se ponga una linea
    liElement.querySelector("input[type='checkbox']").addEventListener("change", () => {
        const taskText = liElement.querySelector("span");
        taskText.style.textDecoration = liElement.querySelector("input[type='checkbox']").checked ? "line-through" : "none";
    })
//comando para el boton de eliminar
    const deleteButton = liElement.querySelector(".delete-button")
    deleteButton.addEventListener("click", () => {
    todoList.removeChild(liElement)
    })
    
    //comando para que se agregue la tarea al principio de la lista
    todoList.appendChild(liElement)    

    //comando para que al presionar enter, se agregue la tarea
    inputTask.value = "" 

}

buttonAddTask.addEventListener('click', createTask) 
