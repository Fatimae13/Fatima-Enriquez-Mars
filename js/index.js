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

////--- Message form-----

const messageForm = document.forms["leave_messages"];

messageForm.addEventListener("submit", function(event){
    event.preventDefault();


    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage= event.target.usersMessage.value;

    console.log("Name: ", userName);
    console.log("Email: ", userEmail);
    console.log("Message: ", userMessage);



    const messageSection = document.getElementById("Messages");

    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.className = "remove-btn";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);


    messageForm.reset();
});