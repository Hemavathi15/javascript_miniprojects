let task = document.getElementById('ip')
const list = document.getElementsByClassName("list")[0];
const btn= document.getElementsByClassName('btn')[0]

function addTask() {
    
  if (task.value == '') {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = task.value;
    list.appendChild(li);

    let span = document.createElement('span')
    span.innerHTML= "\u00d7"
    li.appendChild(span)
    
  }
  task.value=""
  saveData()
}

list.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==='SPAN'){
e.target.parentElement.remove();
saveData()
    }
},false)

function saveData(){
  localStorage.setItem("data",list.innerHTML)
}
function showTask(){
  list.innerHTML=localStorage.getItem("data")
}
showTask()