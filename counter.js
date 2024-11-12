let incrementbtn=document.getElementById("increment");
let decrementbtn=document.getElementById("decrement");
let counter=document.getElementById("counter");
let headDisplay= document.getElementById("headDisplay");
let count=0;
// function for display
function updateDisplay() {
    counter.textContent=count;
    if (count%5===0)
    {
        headDisplay.textContent= `The Updated Value of the Counter is ${count}`
    }
}

incrementbtn.addEventListener("click",() =>{
    count++;
    updateDisplay();
});


decrementbtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});
