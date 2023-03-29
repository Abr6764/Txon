
let list = document.getElementsByTagName("li");

let mylist = document.getElementById("myUL");

function Addtask(){

  let myinput = document.getElementById("myInput");

  
  let todos = document.createElement("li");
  let todotext = document.createTextNode(myinput.value);
  
  if(myinput.placeholder === "What needs to be done ...? " && myinput.value === "")
  {
    alert("enter something");
    
  }else{
    
    
    todos.className = "items";
    
    let span = document.createElement("span");
    let spntxt = document.createTextNode("");
    
    span.appendChild(spntxt);
    span.className = "listcolor";
    todos.appendChild(span);
    todos.appendChild(todotext);
    mylist.appendChild(todos);
      


    myinput.value = "";
    myinput.placeholder = "What needs to be done ...? ";
    listFunction();
  }
  
  
  
}
function listFunction(){
  
  var i;
  
  
  
  
  
  for(i = 0;i < list.length;i++){
    let button = document.createElement("button");
    let txt = document.createTextNode("delete");
    button.className = "close";
    button.appendChild(txt);
    list[i].appendChild(button);
    
    
  }
  

for(i = 0;i < list.length;i++){
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.className = "check";
    
    list[i].appendChild(checkbox);
    
  }
  
  var close = document.getElementsByClassName("close");
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  var check = document.querySelectorAll("input[type=checkbox]");
  
  
  for(i = 0;i < check.length;i++){
    check[i].onclick = function() {
  
      let div = this.parentElement;
  
      div.classList.toggle("checked");
      
      
    }
  }
  
}
listFunction();