const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the menu after clicking a link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target');

const count=+counter.innerText;

const increment=target/150;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});



const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";
nav.style.flexDirection="column";
nav.style.position="absolute";
nav.style.top="80px";
nav.style.right="20px";
nav.style.background="#0B1F3A";
nav.style.padding="20px";

}

});