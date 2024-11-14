let incrementbtn=document.getElementById("increment");
let decrementbtn=document.getElementById("decrement");
let counter=document.getElementById("counter");
let headDisplay= document.getElementById("headDisplay");

//clouser 
function createCounter(){
    let c=0;
    return{
        increment(){
            c++;
            return c;
        },
        decrement(){
        c--;
        return c;
        },
        getcount(){
            return c;
        }
    }
}
// instance of counter clouser
const counterInstance=createCounter();
// function for display
function updateDisplay() {
    let count = counterInstance.getcount();
    counter.textContent=count;
    if (count % 5 === 0 && count !== 0)
    {
        headDisplay.textContent= `The Updated Value of the Counter is ${count}`
        headDisplay.classList.add('bg-slate-500');
        setTimeout(()=> headDisplay.classList.add('animate-pop'),10);
    }
    else{
        headDisplay.classList.remove('bg-slate-500');
        setTimeout(()=> headDisplay.classList.remove('animate-pop'));
    }
    if(count===0){
        decrementbtn.disabled=true;
        decrementbtn.classList.add('opacity-50');
        setTimeout(()=> decrementbtn.classList.add('hover:shake'),10);
    }
    else{
        decrementbtn.disabled=false;
        decrementbtn.classList.remove('cursor-not-allowed')
        decrementbtn.classList.remove('opacity-50');
        setTimeout(()=> decrementbtn.classList.remove('hover:shake'),10);
    }
    }

incrementbtn.addEventListener("click",() =>{
    counterInstance.increment();
    updateDisplay();
});

decrementbtn.addEventListener("click", () => {
    counterInstance.decrement();
    updateDisplay();
});

