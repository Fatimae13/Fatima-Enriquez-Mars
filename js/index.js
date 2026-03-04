const body = document.body;

// footer

let footer = document.createElement("footer");
 body.appendChild(footer);

 const today = new Date();
 const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Fatima Enriquez ${thisYear}`;
footer.appendChild(copyright);

footer.style.textAlign = "center"; 

///---- skills----
const skills= ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

const skillsSelection = document.getElementById("Skills");
const skillsList = skillsSelection.querySelector("ul");

for(let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.innerText = skills[i];
    skillsList.appendChild(li);

}