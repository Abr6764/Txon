let display = document.getElementById("inputField");// displaying numbers on the screen

let count = 0;
let buttons = document.getElementsByClassName("btn");
for(let i = 0;i < buttons.length;++i){                 
     buttons[i].addEventListener("click",function(){

        let bvalue = buttons[i].textContent;
        
        if(display.innerHTML == "0"){
            display.innerHTML = bvalue;
        }
        else{
            display.innerHTML += bvalue;
        }

        
    })
    
}


// clearing and set the screen to "0"
let clear = document.getElementById("clear");

clear.addEventListener("click",function(){
    display.innerHTML = "0";
    
    
})

//deleting numbers one by one
let del = document.getElementById("del");
del.addEventListener("click",function(){
    let text = display.innerHTML;
    let clear = text.slice(0,-1);

    display.innerHTML = clear;
    if(display.innerHTML == ''){
        display.innerHTML = "0";
    }
})

//displaying operators on the screen
let operator = document.getElementsByClassName("operator");

for(let i=0;i<operator.length;i++){

    operator[i].addEventListener("click",function(){
         
        let operatorvalue = operator[i].value;
        let text = display.innerHTML;
        if(text[text.length-1] == "+" ||text[text.length-1] == "-" ||text[text.length-1] == "*"||text[text.length-1] == "/"||text[text.length-1] == "%" ){
                return;
        }else if (display.innerHTML == "0") {
        
            display.innerHTML = operatorvalue; 
            
        } else {
            
            display.innerHTML += operatorvalue; 
        }
        
        
       
        
        
    })
}

// calculating the Equation 
let result = document.getElementById("equalto");
result.addEventListener("click",() =>{
    let r = display.innerHTML;
    let ans = eval(display.innerHTML);
    ans = ans*100;
    ans  = Math.floor(ans);
    let ans2 = ans*0.01;
    display.innerHTML = ans2;
    
})