const btn = document.querySelector('#add-btn')


function addTask(){
    // titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value
    
    if (taskTitle){
        const template = document.querySelector('.template')
        //clonar o template 
        const newTask = template.cloneNode(true)
        
        //adicionar titulo
        newTask.querySelector('.task-title').textContent = taskTitle

        //remover as classes
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adicionar tarefa na lista
        let lista = document.querySelector('#task-list')
        lista.appendChild(newTask)
        
        //limpar texto
        document.querySelector('#task-title').value = ''

        // adicionar evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener('click', function(){
            removeTask(this)
        })

        //adicioanr evento de done
        const doneBtn = newTask.querySelector(".done-btn").addEventListener('click', function(){
            doneTask(this)
        })
    } 
    
}


function removeTask(task){
    task.parentNode.remove(true)
}

function doneTask(task){
    task.parentNode.classList.toggle('done')
}

btn.addEventListener('click', function(event){

    event.preventDefault() //para evitar que o formulario seja enviado, do btn type submit
    addTask()
})