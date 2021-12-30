const tasks = document.querySelector("#tasks");
const taskInput = document.querySelector("#add-task-input");
const taskInputDiv = document.querySelector("#add-task-div");
const taskAdd = document.querySelector("#task-add");
const taskAddPop = document.querySelectorAll(".task-add-btn");
const cancel = document.querySelector("#cancel");
const date = document.querySelector("#date");
const emptyDiv = document.querySelector("#empty-div");
let clearTask = document.querySelectorAll(".check-btn");


date.textContent = new Date().toDateString().slice(0,11);



function addTask(){
    if(taskInput.value == ""){
        return;
    }
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

function enterTask(eve){    //Function to add task when enter key is pressed
    if(eve.keyCode == 13){
        eve.preventDefault();
        addTask();
    }
}

function addBtnAct(){
    if(taskInput.value !== ""){
        taskAdd.classList.remove("task-add-disable");
        taskAdd.classList.add("task-add-active");
    }else if(taskInput.value === ""){
        taskAdd.classList.remove("task-add-active");
        taskAdd.classList.add("task-add-disable");
    }
}

function clearsTask(eve){
    eve.target.closest("button").classList.toggle("check-btn-active");
    clearTask.forEach(ele=>ele.addEventListener("transitionend",clearsTasks));
}
function clearsTasks(eve){          //Clears the task when transition is ended
    if(eve.propertyName.includes("transform")){
        eve.target.closest("li").remove();
    }

    if(tasks.innerHTML == "" && taskInputDiv.classList.contains("display-toggle")==true){
        emptyDiv.classList.remove("display-toggle");
    }
}

function taskInputDisplay(){                                 //Removes the display for the add task div so that it is off the screen
    taskInputDiv.classList.toggle("display-toggle");
    emptyDiv.classList.add("display-toggle");
    taskInput.focus();
    taskAddPop[1].classList.toggle("display-toggle");
    taskAddPop[0].removeEventListener("click", taskInputDisplay);
}

function cancelTask(){       
    taskInputDiv.classList.toggle("display-toggle");
    taskAddPop[1].classList.toggle("display-toggle");
    taskInput.value = "";
    taskAddPop[0].addEventListener("click", taskInputDisplay);
    addBtnAct();
    
    
    if(tasks.innerHTML == ""){
        emptyDiv.classList.remove("display-toggle");
    }
}



taskAdd.addEventListener("click", addTask);
taskAddPop.forEach(nodes => nodes.addEventListener("click",taskInputDisplay))
cancel.addEventListener("click", cancelTask);
taskInput.addEventListener("keydown", enterTask);
taskInput.addEventListener("keyup", addBtnAct);