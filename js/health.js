// ======================================
// BusinessPilot AI
// health.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    animateHealthScore();

    animateKPIs();

    animateSummary();

    createToast();

    exportButton();

    autoRefresh();

});

// ======================================
// Health Score Animation
// ======================================

function animateHealthScore(){

    const score=document.querySelector(".score-value");

    if(!score) return;

    let current=0;

    const target=87;

    const timer=setInterval(()=>{

        current++;

        score.innerHTML=current+"<span>/100</span>";

        if(current>=target){

            clearInterval(timer);

        }

    },20);

}

// ======================================
// KPI Animation
// ======================================

function animateKPIs(){

    document.querySelectorAll(".glass h2").forEach(item=>{

        const text=item.innerText;

        const number=parseInt(text.replace(/[^0-9]/g,""));

        if(isNaN(number)) return;

        let current=0;

        const step=Math.ceil(number/80);

        const timer=setInterval(()=>{

            current+=step;

            if(current>=number){

                current=number;

                clearInterval(timer);

            }

            if(text.includes("฿")){

                item.innerHTML="฿"+current.toLocaleString();

            }

            else if(text.includes("Months")){

                item.innerHTML=current+" Months";

            }

            else{

                item.innerHTML=current;

            }

        },15);

    });

}

// ======================================
// AI Summary Animation
// ======================================

function animateSummary(){

    document.querySelectorAll(".ai-card li").forEach((item,index)=>{

        item.style.opacity="0";

        item.style.transform="translateX(-30px)";

        setTimeout(()=>{

            item.style.transition=".5s";

            item.style.opacity="1";

            item.style.transform="translateX(0)";

        },index*250);

    });

}

// ======================================
// Toast
// ======================================

function createToast(){

    const toast=document.createElement("div");

    toast.innerHTML="✅ AI analysis completed successfully";

    toast.style.position="fixed";

    toast.style.right="30px";

    toast.style.bottom="30px";

    toast.style.background="#22c55e";

    toast.style.color="white";

    toast.style.padding="16px 25px";

    toast.style.borderRadius="15px";

    toast.style.opacity="0";

    toast.style.transition=".5s";

    toast.style.zIndex="999";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.style.opacity="1";

    },600);

    setTimeout(()=>{

        toast.style.opacity="0";

    },3500);

}

// ======================================
// Export Report
// ======================================

function exportButton(){

    const btn=document.querySelector(".export-btn");

    if(!btn) return;

    btn.addEventListener("click",()=>{

        btn.innerHTML="<i class='fa-solid fa-spinner fa-spin'></i> Exporting...";

        setTimeout(()=>{

            alert("Report exported successfully.");

            btn.innerHTML="<i class='fa-solid fa-download'></i> Export Report";

        },1800);

    });

}

// ======================================
// Auto Refresh Health Score
// ======================================

function autoRefresh(){

    const score=document.querySelector(".score-value");

    if(!score) return;

    let value=87;

    setInterval(()=>{

        value+=Math.floor(Math.random()*3)-1;

        if(value>95) value=95;

        if(value<80) value=80;

        score.innerHTML=value+"<span>/100</span>";

    },10000);

}

// ======================================
// Hover Effect
// ======================================

document.querySelectorAll(".glass").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(6,182,212,.15),
        rgba(255,255,255,.04) 65%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.04)";

    });

});

// ======================================
// Console
// ======================================

console.log("%cBusiness Health Loaded",
"color:#22c55e;font-size:16px;font-weight:bold");