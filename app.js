let search=document.querySelector("#search");
let scholarship=[["static/icons/scholarship.png","NSF Scholarship","Deadline: 30/04/2024","<li>Min. 60% marks in previous class</li><li>no gender preference</li><li>annual family income less than 3Lac.</li><li>12th passed students</li>","https://www.northsouth.org/public"],["static/icons/scholarship.png","NSF Scholarship","Deadline: 30/04/2024","<li>Min. 60% marks in previous class</li><li>no gender preference</li><li>annual family income less than 3Lac.</li><li>12th passed students</li>",""]];
// adding scholarship cards in home page
let content=document.querySelector(".content");

// let sch=()=>{

// }
for(let i=0;i<scholarship.length;i++){
    let card=document.createElement("div");
    let img=document.createElement("img");
    let h3=document.createElement("h3");
    let p=document.createElement("p");
    let ul=document.createElement("ul");
    let button=document.createElement("button");
    button.style.backgroundColor="#ddd";
    button.innerText="Apply";
    button.onclick=()=>{
        alert("Yu have clicked on apply now!!!");
        
    };
    button.style.height="20px";
    button.style.width="50px";
    img.src=scholarship[i][0];
    card.appendChild(img);
    h3.innerHTML=scholarship[i][1];
    card.appendChild(h3);
    p.innerHTML=scholarship[i][2];
    card.appendChild(p);
    ul.innerHTML=scholarship[i][3];
    card.appendChild(ul);
    card.appendChild(button);
    card.classList.add("card");
    content.appendChild(card);

}