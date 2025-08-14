let ctr = 0;

function callback(){
    
    document.querySelectorAll(".todo")[2].innerHTML = ctr;
    ctr = ctr + 1;
    
}

setInterval(callback, 1000);

   
