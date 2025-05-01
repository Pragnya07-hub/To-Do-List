const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
function addTask(){
    if(taskInput.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
    autoSave();
}
taskList.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    autoSave();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    autoSave();
}
}, false);
function autoSave(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();