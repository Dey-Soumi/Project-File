let listitem = document.getElementById('list-item')
let inputBox = document.getElementById('input-box')
let head = document.querySelector('head')
function addTask() {
    if (inputBox.value === '') {
        alert('Add your task')
    }
    else {
        const task = document.createElement('li')
        task.textContent = inputBox.value
        listitem.appendChild(task)
        let span=document.createElement('span');
        span.textContent='\u00d7'
        task.appendChild(span)
        span.style.right = '0px';
    }
    inputBox.value=""
    saveData()
}

listitem.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    //for remove that task
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})
//for localy storage the data
function saveData(){
    localStorage.setItem("data",listitem.innerHTML)
}

function showTask(){
    listitem.innerHTML = localStorage.getItem("data");
}

showTask()