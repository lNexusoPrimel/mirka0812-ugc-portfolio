// LOADER

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("hidden");

},2200);

});


// CONTACT FORM


const contactForm=document.querySelector("#contact-form");


if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();


const submitBtn=contactForm.querySelector("button");

const originalText=submitBtn.innerHTML;

submitBtn.innerHTML="Sending...";

submitBtn.disabled=true;


fetch(contactForm.action,{

method:"POST",

body:new FormData(contactForm),

headers:{

"Accept":"application/json"

}

})

.then(response=>{


if(response.ok){


contactForm.reset();


contactForm.classList.add("submitted");


}

else{


alert("Something went wrong. Please try again or email me directly.");


}


})

.catch(()=>{


alert("Something went wrong. Please try again or email me directly.");


})

.finally(()=>{


submitBtn.innerHTML=originalText;

submitBtn.disabled=false;


});


});


}


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

// VIDEO HOVER PLAY


const videos=document.querySelectorAll(".video-card video");


videos.forEach(video=>{


video.parentElement.addEventListener("mouseenter",()=>{

video.play();

});



video.parentElement.addEventListener("mouseleave",()=>{

video.pause();

video.currentTime=0;

});


});







// FILTERS


const filters=document.querySelectorAll(".filter");

const cards=document.querySelectorAll(".video-card");


filters.forEach(button=>{


button.addEventListener("click",()=>{


filters.forEach(btn=>btn.classList.remove("active"));


button.classList.add("active");



let category=button.dataset.category;



cards.forEach(card=>{


if(category=="all" ||
card.dataset.category==category){


card.style.display="block";


}

else{


card.style.display="none";


}


});



});


});







// MODAL VIDEO


const modal=document.querySelector(".video-modal");

const modalVideo=modal.querySelector("video");

const close=document.querySelector(".close");



cards.forEach(card=>{


card.addEventListener("click",()=>{


let video=card.querySelector("video");


modal.style.display="flex";


modalVideo.src=video.querySelector("source").src;


modalVideo.play();



});


});



close.onclick=()=>{


modal.style.display="none";


modalVideo.pause();


};


// FAQ ACCORDION


const faqButtons=document.querySelectorAll(".faq-box button");


faqButtons.forEach(button=>{


button.addEventListener("click",()=>{


let answer=button.nextElementSibling;


if(answer.style.display==="block"){

answer.style.display="none";

}

else{

answer.style.display="block";

}


});


});

// CUSTOM CURSOR


const cursor=document.querySelector(".cursor");

const dot=document.querySelector(".cursor-dot");


document.addEventListener("mousemove",(e)=>{


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


dot.style.left=e.clientX+"px";

dot.style.top=e.clientY+"px";


});





const hoverElements=document.querySelectorAll("a,button,.video-card");


hoverElements.forEach(element=>{


element.addEventListener("mouseenter",()=>{


cursor.style.transform="translate(-50%,-50%) scale(1.8)";


});



element.addEventListener("mouseleave",()=>{


cursor.style.transform="translate(-50%,-50%) scale(1)";


});


});


