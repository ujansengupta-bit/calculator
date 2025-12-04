const display = document.getElementById("display");
display.innerHTML ="";

function click(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event=>{
       display.innerHTML += id.textContent;
    })

}

function erase(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event=>{
       display.innerHTML = "";
    })

}

function backspace(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event =>{
        let newstring = "";
        let oldstring = display.innerHTML;

        for(let i =0; i< oldstring.length -1; i++){
            newstring += oldstring[i];
        }
        display.innerHTML = newstring;
    })
}


function operate(a, operand, b){

    if (operand === "/" && b === 0) {
        display.innerHTML = "ERROR: Div by 0";
        return; 
    }
    
    if(operand === "+"){
        display.innerHTML = add(a, b);
    }
    else if(operand === "-"){
        display.innerHTML = substract(a, b);
    } 
    else if(operand === "*"){
        display.innerHTML = multiply(a, b);
    }
    else{
        display.innerHTML = divide(a, b);
    }
}

function equals(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event=>{
        let string = display.innerHTML;
        let operand = 0;
        let index = -1;

        for(let i=0; i< string.length; i++){
            const char = string[i];

            if(char ==='+' || char ==='*' || char ==='/'){
                operand = char;
                index = i;
                break;
            }

            if(char ==='-' && index != 0){
                operand = char;
                index = i;
                break;
            }
        }
         if(index>0 && index<string.length){
                let string_before="";
                let string_after ="";

                for(let j = 0; j< index; j++){
                    string_before += string[j];
                }
                for(let j = index+1; j< string.length; j++){
                    string_after += string[j];
                }

                let target1 = Number(string_before);
                let target2 = Number(string_after);

                operate(target1, operand, target2);
        }

    })
}


function add(target1, target2){
        return Number(target1) + Number(target2);  
}
function substract(target1, target2){
        return Number(target1) - Number(target2);  
}
function multiply(target1, target2){
        return Number(target1) * Number(target2);  
}
function divide(target1, target2){
        return Number(target1) / Number(target2);  
}


click("zero");
click("one");
click("two");
click("three");
click("four");
click("five");
click("six");
click("seven");
click("eight");
click("nine");
click("divison");
click("mul");
click("plus");
click("minus");
erase("clear");
backspace("del");
equals("equal");