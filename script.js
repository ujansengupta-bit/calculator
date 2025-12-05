const display = document.getElementById("display");
display.innerHTML ="";

function click(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event=>{
       if(display.innerHTML == "NaN" || display.innerHTML.startsWith("ERROR: Div by 0")){
        display.innerHTML = "";
       }
       display.innerHTML += id.textContent;
       if(tar === "plus" || tar === "minus" || tar === "mul" || tar === "divison"){
            enable("deci");
       }
    })

}

function erase(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event=>{
       display.innerHTML = "";
       enable("deci");
    })

}

function enable(tar){
    const id = document.getElementById(tar);
    return id.disabled = false;
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



function disable(tar){
    const id = document.getElementById(tar);
    return id.disabled = true;
}


function decimal(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event =>{
        display.innerHTML += ".";
        id.disabled = true;
        disable("minus");
        disable("plus");
        disable("mul");
        disable("divison");
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

document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Map keys to button IDs
    const keyToId = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "+": "plus",
        "-": "minus",
        "*": "mul",
        "/": "divison",
        ".": "deci",
        "Enter": "equal",
        "=": "equal",
        "Backspace": "del",
        "Delete": "clear",
        "c": "clear"
    };

    if (keyToId[key]) {
        const btn = document.getElementById(keyToId[key]);
        if (btn && !btn.disabled) {
            btn.click();
        }
    }
});


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
decimal("deci");