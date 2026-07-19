// ========================================
// BusinessPilot AI
// upload.js
// ========================================

const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("browseBtn");

// ============================
// Create Elements
// ============================

const progressContainer = document.createElement("div");
progressContainer.className = "progress-container";

progressContainer.innerHTML = `
<div class="progress-bar">
    <div class="progress"></div>
</div>

<p class="progress-text">0%</p>
`;

dropArea.parentElement.appendChild(progressContainer);

const fileInfo = document.createElement("div");

fileInfo.className = "file-info";

dropArea.parentElement.appendChild(fileInfo);

const successBox = document.createElement("div");

successBox.className = "success-box";

successBox.innerHTML = `
<i class="fa-solid fa-circle-check"></i>
 Upload completed successfully.
`;

dropArea.parentElement.appendChild(successBox);

const previewTable = document.createElement("table");

previewTable.className = "preview-table";

dropArea.parentElement.appendChild(previewTable);

const analyzeBtn = document.createElement("button");

analyzeBtn.className = "analyze-btn";

analyzeBtn.innerHTML = `
<i class="fa-solid fa-robot"></i>
 Analyze with AI
`;

dropArea.parentElement.appendChild(analyzeBtn);

// ============================
// Browse
// ============================

browseBtn.onclick = () => {

    fileInput.click();

};

fileInput.addEventListener("change", () => {

    if (fileInput.files.length > 0) {

        handleFile(fileInput.files[0]);

    }

});

// ============================
// Drag & Drop
// ============================

dropArea.addEventListener("dragover", e => {

    e.preventDefault();

    dropArea.classList.add("dragover");

});

dropArea.addEventListener("dragleave", () => {

    dropArea.classList.remove("dragover");

});

dropArea.addEventListener("drop", e => {

    e.preventDefault();

    dropArea.classList.remove("dragover");

    const file = e.dataTransfer.files[0];

    if (file) {

        handleFile(file);

    }

});

// ============================
// Handle File
// ============================

function handleFile(file){

    uploadAnimation(file);

}

// ============================
// Upload Animation
// ============================

function uploadAnimation(file){

    progressContainer.style.display="block";

    let progress = 0;

    const bar = document.querySelector(".progress");

    const text = document.querySelector(".progress-text");

    const timer = setInterval(()=>{

        progress += 2;

        bar.style.width = progress + "%";

        text.innerHTML = progress + "%";

        if(progress>=100){

            clearInterval(timer);

            showFile(file);

        }

    },25);

}

// ============================
// File Info
// ============================

function showFile(file){

    successBox.style.display="block";

    fileInfo.style.display="block";

    fileInfo.innerHTML=`

<h4>Uploaded File</h4>

<div class="file-row">

<span>File Name</span>

<strong>${file.name}</strong>

</div>

<div class="file-row">

<span>Size</span>

<strong>${(file.size/1024).toFixed(2)} KB</strong>

</div>

<div class="file-row">

<span>Type</span>

<strong>${file.type || "Unknown"}</strong>

</div>

`;

    previewCSV(file);

}

// ============================
// CSV Preview
// ============================

function previewCSV(file){

    if(!file.name.endsWith(".csv")){

        analyzeBtn.style.display="inline-block";

        return;

    }

    const reader=new FileReader();

    reader.onload=function(e){

        const text=e.target.result;

        const rows=text.split("\n").slice(0,6);

        previewTable.style.display="table";

        let html="";

        rows.forEach((row,index)=>{

            html+="<tr>";

            row.split(",").forEach(col=>{

                if(index==0){

                    html+="<th>"+col+"</th>";

                }

                else{

                    html+="<td>"+col+"</td>";

                }

            });

            html+="</tr>";

        });

        previewTable.innerHTML=html;

        analyzeBtn.style.display="inline-block";

    }

    reader.readAsText(file);

}

// ============================
// Analyze
// ============================

analyzeBtn.onclick=function(){

    analyzeBtn.innerHTML=`
    <i class="fa-solid fa-spinner fa-spin"></i>
    AI is analyzing...
    `;

    analyzeBtn.disabled=true;

    setTimeout(()=>{

        window.location.href="health.html";

    },3000);

}

// ============================
// Console
// ============================

console.log("Upload Module Loaded");