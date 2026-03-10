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

///---fetch---

fetch("https://api.github.com/users/Fatimae13/repos")
    .then((response) => {
        if(!response.ok){
            throw new Error("Failed to fetch data from GitHub.Please try again later");
        }

        return response.json();

    })
    .then((repositories) => {
        //repositories= json.parse(this.respositories);
        console.log("Repositories:",repositories);
        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.querySelector("ul");
        projectList.innerHTML = "";

        for (let i=0; i < repositories.length; i++) {
            const project = document.createElement("li");
            const link = document.createElement("a");
            link.href = repositories[i].html_url;
            link.textContent = repositories[i].name;
            project.appendChild(link);
            projectList.appendChild(project);

        }
        })

    .catch((error) => {
        console.error("Error fetching repositories:",error);

        const projectSection = document.getElementById("Projects");
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = 'Unable to load projects. Please try again later';
        projectSection.appendChild(errorMessage);

    });

    