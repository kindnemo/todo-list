const tasks = document.querySelector("#tasks");
const taskInput = document.querySelector("#add-task-input");
const taskInputDiv = document.querySelector("#add-task-div");
const taskAdd = document.querySelector("#task-add");
const taskAddPop = document.querySelectorAll(".task-add-btn");
const cancel = document.querySelector("#cancel");
const date = document.querySelector("#date");

date.textContent = new Date().toDateString().slice(0,11);


//CREATING THE CHECK MARK BUTTON
let checkBtn = document.createElement("BUTTON");
checkBtn.setAttribute("id","check-btn");
let checkSpan = document.createElement("SPAN");
checkSpan.setAttribute("id","check-mark-span");
let checkImage = document.createElement("IMG");
checkImage.src = "images/check-mark.png";
checkImage.alt = "check-mark-image";
checkImage.setAttribute("id","check-mark-image");
checkSpan.appendChild(checkImage);
checkBtn.appendChild(checkSpan);


function addTask(){
    let taskToAdd = document.createElement("LI");
    let textSpan = document.createElement("SPAN");
    
    textSpan.textContent = taskInput.value;
    taskToAdd.appendChild(checkBtn);
    taskToAdd.appendChild(textSpan);
    
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