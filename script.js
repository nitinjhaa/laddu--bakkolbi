/* ======================================
   Ghibli Love Website
   Premium JavaScript - Part 1
======================================*/

// ======================
// Elements
// ======================

const loader = document.getElementById("loader");
const hero = document.querySelector(".hero");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");

const openBtn = document.getElementById("openBtn");
const memoryBtn = document.getElementById("memoryBtn");

const bgMusic = document.getElementById("bgMusic");
const playPause = document.getElementById("playPause");
const volume = document.getElementById("volume");

const typing = document.getElementById("typing");

// ======================
// Loader
// ======================

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},800);

},2500);

});

// ======================
// Typewriter Text
// ======================

const loveLetter = `

Meri Laddu Bakkolbi ❤️

Main sirf ye kehna chahta hu...

I genuinely love you.

Main aapko bahut hi zyada pyaar karta hu.

Main ladai aapse nahi...

Aapke liye karta hu.

Aap meri duniya ho.

Mujhe replacement se zyada

repair par trust hai.

Ho sake toh...

Repair kar lete hain ❤️

I Loveee You Forever ❤️

`;

let index = 0;

function typeWriter(){

if(index < loveLetter.length){

typing.innerHTML += loveLetter.charAt(index);

index++;

setTimeout(typeWriter,40);

}

}

// ======================
// Open Letter
// ======================

openBtn.addEventListener("click",()=>{

hero.style.display="none";

letter.classList.remove("hidden");

typeWriter();

if(bgMusic){

bgMusic.play().catch(()=>{});

}

});

// ======================
// Open Gallery
// ======================

memoryBtn.addEventListener("click",()=>{

letter.classList.add("hidden");

gallery.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ======================
// Music Player
// ======================

playPause.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play();

playPause.innerHTML='<i class="fa-solid fa-pause"></i>';

}

else{

bgMusic.pause();

playPause.innerHTML='<i class="fa-solid fa-play"></i>';

}

});

volume.addEventListener("input",()=>{

bgMusic.volume=volume.value;

});
/* ======================================
   Premium JavaScript - Part 2
======================================*/

// ======================
// Floating Hearts
// ======================

const heartsContainer = document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createHeart,350);

// ======================
// Sakura Petals
// ======================

const petalsContainer=document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(7+Math.random()*6)+"s";

petalsContainer.appendChild(petal);

setTimeout(()=>{

petal.remove();

},13000);

}

setInterval(createPetal,600);

// ======================
// Twinkling Stars
// ======================

const stars=document.getElementById("stars");

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}

// ======================
// Scroll Reveal
// ======================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// ======================
// Back To Top
// ======================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ======================
// Lightbox
// ======================

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const closeLightbox=document.getElementById("closeLightbox");

document.querySelectorAll(".photo-card img").forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

// ======================
// Restart Button
// ======================

const restart=document.getElementById("restart");

if(restart){

restart.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

hero.style.display="flex";

gallery.classList.add("hidden");

letter.classList.add("hidden");

typing.innerHTML="";

index=0;

});

}
/* ======================================
   Premium JavaScript - Part 3
   Final Animations
======================================*/

// ======================
// Cursor Sparkles
// ======================

document.addEventListener("mousemove",(e)=>{

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=e.pageX+"px";

sparkle.style.top=e.pageY+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},700);

});

// ======================
// Heart Burst Effect
// ======================

function heartBurst(x,y){

for(let i=0;i<18;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="burst-heart";

heart.style.left=x+"px";

heart.style.top=y+"px";

heart.style.setProperty("--x",(Math.random()*300-150)+"px");

heart.style.setProperty("--y",(Math.random()*300-150)+"px");

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1200);

}

}

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",(e)=>{

heartBurst(e.pageX,e.pageY);

});

});

// ======================
// Auto Gallery Slider
// ======================

const photos=document.querySelectorAll(".photo-card");

let currentPhoto=0;

function highlightPhoto(){

photos.forEach(photo=>{

photo.style.transform="scale(1)";

photo.style.zIndex="1";

});

if(photos.length>0){

photos[currentPhoto].style.transform="scale(1.08)";

photos[currentPhoto].style.zIndex="5";

currentPhoto=(currentPhoto+1)%photos.length;

}

}

setInterval(highlightPhoto,3000);

// ======================
// Floating Quote
// ======================

const quotes=[

"I genuinely love you ❤️",

"You are my home.",

"Repair > Replacement ❤️",

"I can't afford to lose you.",

"Forever Yours ❤️"

];

const quote=document.createElement("div");

quote.id="floatingQuote";

document.body.appendChild(quote);

let quoteIndex=0;

function changeQuote(){

quote.innerHTML=quotes[quoteIndex];

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

}

changeQuote();

setInterval(changeQuote,5000);

// ======================
// Scroll Progress Bar
// ======================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

progress.style.width=(current/total)*100+"%";

});

// ======================
// Welcome Message
// ======================

setTimeout(()=>{

console.log("❤️ Welcome Laddu Bakkolbi ❤️");

},2000);

// ======================
// Finished
// ======================

console.log("Premium Romantic Website Loaded Successfully ❤️");
