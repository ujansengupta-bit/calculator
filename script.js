const display = document.getElementById("display")
display.innerHTML = "0";
const clear = document.getElementById("clear")
const equal = document.getElementById("equal")

function click(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event=>{
       display.innerHTML += id.textContent;
    })

}

function erase(tar){
    const id = document.getElementById(tar);
    id.addEventListener("click", event=>{
       display.innerHTML = "0";
    })

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