const navbar = document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}



});





// SCROLL REVEAL


const reveals=document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


reveals.forEach(item=>{


let windowHeight=window.innerHeight;

let elementTop=item.getBoundingClientRect().top;


if(elementTop < windowHeight - 100){

item.classList.add("active");

}


});


});







// COUNTERS


const counters=document.querySelectorAll(".stat h2");


counters.forEach(counter=>{


let target=counter.dataset.number;


let count=0;



let interval=setInterval(()=>{


count+=Math.ceil(target/100);



if(count>=target){

count=target;

clearInterval(interval);

}



if(target>=1000000){

counter.innerHTML=(count/1000000).toFixed(1)+"M";

}

else{

counter.innerHTML=count;

}



},30);



});
