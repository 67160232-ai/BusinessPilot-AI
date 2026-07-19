// ======================================
// BusinessPilot AI Dashboard
// dashboard.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    animateNumbers();

    sidebarActive();

    searchFunction();

    notificationAnimation();

    welcomeAnimation();

    fakeRealtimeUpdate();

});

// ======================================
// Active Sidebar
// ======================================

function sidebarActive(){

    const menus=document.querySelectorAll(".menu-item");

    menus.forEach(menu=>{

        menu.addEventListener("click",()=>{

            menus.forEach(m=>m.classList.remove("active"));

            menu.classList.add("active");

        });

    });

}

// ======================================
// Search
// ======================================

function searchFunction(){

    const input=document.querySelector(".search input");

    if(!input) return;

    input.addEventListener("keyup",(e)=>{

        if(e.key==="Enter"){

            alert("Searching : "+input.value);

        }

    });

}

// ======================================
// KPI Counter Animation
// ======================================

function animateNumbers(){

    const cards=document.querySelectorAll(".glass h2");

    cards.forEach(card=>{

        const text=card.innerText;

        const value=parseInt(text.replace(/[^0-9]/g,""));

        if(isNaN(value)) return;

        let current=0;

        const step=Math.ceil(value/80);

        const timer=setInterval(()=>{

            current+=step;

            if(current>=value){

                current=value;

                clearInterval(timer);

            }

            if(text.includes("฿")){

                card.innerHTML="฿"+current.toLocaleString();

            }

            else if(text.includes("Months")){

                card.innerHTML=current+" Months";

            }

            else{

                card.innerHTML=current;

            }

        },15);

    });

}

// ======================================
// Notification
// ======================================

function notificationAnimation(){

    const btn=document.querySelector(".notification-btn");

    if(!btn) return;

    btn.addEventListener("click",()=>{

        alert(
`BusinessPilot AI

• Revenue increased 18%

• Cash runway : 6 months

• AI recommends reducing advertising by 20%.

• Forecast confidence : 96%`
        );

    });

}

// ======================================
// Welcome Animation
// ======================================

function welcomeAnimation(){

    const banner=document.querySelector(".health-banner");

    if(!banner) return;

    banner.style.opacity=0;

    banner.style.transform="translateY(30px)";

    setTimeout(()=>{

        banner.style.transition=".8s";

        banner.style.opacity=1;

        banner.style.transform="translateY(0)";

    },200);

}

// ======================================
// Fake Real Time Update
// ======================================

function fakeRealtimeUpdate(){

    const health=document.querySelector(".health-banner h1");

    if(!health) return;

    let score=87;

    setInterval(()=>{

        let change=Math.floor(Math.random()*3)-1;

        score+=change;

        if(score>99) score=99;

        if(score<70) score=70;

        health.innerHTML=score+" <span>/100</span>";

    },10000);

}

// ======================================
// Card Hover Effect
// ======================================

const cards=document.querySelectorAll(".glass");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(6,182,212,.18),
        rgba(255,255,255,.04) 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.04)";

    });

});

// ======================================
// Clock
// ======================================

const topbar=document.querySelector(".topbar");

if(topbar){

    const clock=document.createElement("div");

    clock.style.color="#94a3b8";

    clock.style.fontSize="14px";

    clock.style.marginLeft="20px";

    topbar.appendChild(clock);

    setInterval(()=>{

        const now=new Date();

        clock.innerHTML=now.toLocaleTimeString();

    },1000);

}

// ======================================
// Today's Greeting
// ======================================

const title=document.querySelector(".topbar h2");

if(title){

    const hour=new Date().getHours();

    let greet="Welcome Back";

    if(hour<12){

        greet="Good Morning";

    }

    else if(hour<18){

        greet="Good Afternoon";

    }

    else{

        greet="Good Evening";

    }

    title.innerHTML=greet+" 👋";

}

// ======================================
// Console Message
// ======================================

console.log("%cBusinessPilot AI",
"font-size:24px;color:#06b6d4;font-weight:bold");

console.log("%cDashboard Loaded Successfully",
"color:#22c55e;font-size:14px;");