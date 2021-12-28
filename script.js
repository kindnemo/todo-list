const tasks = document.querySelector("#tasks");
const taskInput = document.querySelector("#add-task-input");
const taskInputDiv = document.querySelector("#add-task-div");
const taskAdd = document.querySelector("#task-add");
const taskAddPop = document.querySelectorAll(".task-add-btn");
const cancel = document.querySelector("#cancel");
const date = document.querySelector("#date");
let clearTask = document.querySelectorAll(".check-btn");


date.textContent = new Date().toDateString().slice(0,11);





function addTask(){
    //CREATING THE CHECK MARK BUTTON
    let checkBtn = document.createElement("BUTTON");
    checkBtn.classList.add("check-btn");
    let checkSpan = document.createElement("SPAN");
    checkSpan.classList.add("check-mark-span");
    let checkImage = document.createElement("IMG");
    checkImage.src = "images/check-mark.png";
    checkImage.alt = "check-mark-image";
    checkImage.classList.add("check-mark-image");
    checkSpan.appendChild(checkImage);
    checkBtn.appendChild(checkSpan);
    
    
    let taskToAdd = document.createElement("LI");
    let textSpan = document.createElement("SPAN");
    
    textSpan.textContent = taskInput.value;
    taskToAdd.appendChild(checkBtn);
    taskToAdd.appendChild(textSpan);
    
    tasks.appendChild(taskToAdd);
    taskInput.value="";
    
    // Updates the nodelist clearTask everytime a task is created and adds the eventlistener to all of them
    clearTask = document.querySelectorAll(".check-btn");
    clearTask.forEach(ele=>ele.addEventListener("click",clearsTask));
}

function clearsTask(eve){
    eve.target.closest("li").remove();
    
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
