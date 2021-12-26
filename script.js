const tasks = document.querySelector("#tasks");
const taskInput = document.querySelector("#add-task-input");
const taskInputDiv = document.querySelector("#add-task-div");
const taskAdd = document.querySelector("#task-add");
const taskAddPop = document.querySelectorAll(".task-add-btn");
const cancel = document.querySelector("#cancel");


function addTask(){
    let taskToAdd = document.createElement("LI");
    taskToAdd.textContent = taskInput.value;
    tasks.appendChild(taskToAdd);
    taskInput.value="";
}

function taskInputDisplay(){                                 //Removes the display for the add task div so that it is off the screen
    taskInputDiv.classList.toggle("display-toggle");
    taskAddPop[1].classList.toggle("display-toggle");
    taskAddPop[0].removeEventListener("click", taskInputDisplay);
}

function cancelTask(){       
    taskInputDiv.classList.toggle("display-toggle");
    taskAddPop[1].classList.toggle("display-toggle");
    taskAddPop[0].addEventListener("click", taskInputDisplay);
}




taskAdd.addEventListener("click", addTask);
taskAddPop.forEach(nodes => nodes.addEventListener("click",taskInputDisplay))
cancel.addEventListener("click", cancelTask);