let Icount = document.querySelector("#Icount");
let Dcount = document.querySelector("#Dcount");
let counting = document.querySelector("#counting");
let reset = document.querySelector("#Reset");
counting.textContent=`0`;
let count = 0;

Icount.onclick = () => {
 count = count + 1;
   counting.textContent = `${count}`;
   
}

Dcount.onclick = () => {
 count = count - 1;
   counting.textContent = `${count}`;
  
}

reset.onclick = () => {
   count = 0; 
   counting.textContent = `${count}`;
}
