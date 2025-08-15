document.querySelectorAll('.navigator a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetText = this.textContent.toLowerCase();

        let targetSection;
        if (targetText === 'home') targetSection = document.querySelector('header');
        else if (targetText === 'about') targetSection = document.querySelector('main');
        else if (targetText === 'contact') targetSection = document.querySelector('form');

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener("load", () => {
    alert("Welcome to the Skills Test!");
    updateStudentCount();
    displaySubmittedData();
});

const form = document.querySelector("form");
const formMessage = document.createElement("p");
form.appendChild(formMessage);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
        const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
        submissions.push({ name, email, message });
        localStorage.setItem("submissions", JSON.stringify(submissions));

        form.reset();
        displaySubmittedData();
    }
});

const themeButton = document.createElement("button");
themeButton.textContent = "Change Theme";
themeButton.style.display = "block";
themeButton.style.margin = "1rem auto";
themeButton.style.padding = "0.5rem 1rem";
themeButton.style.cursor = "pointer";
document.body.insertBefore(themeButton, document.body.firstChild);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

const counter = document.createElement("p");
counter.style.textAlign = "center";
counter.style.fontWeight = "600";
document.querySelector("main").insertBefore(counter, document.querySelector("main").firstChild);

function updateStudentCount() {
    const totalStudents = document.querySelectorAll("table tbody tr").length;
    counter.textContent = `Total Students: ${totalStudents}`;
}

const addStudentForm = document.createElement("form");
addStudentForm.innerHTML = `
    <h3>Add Student</h3>
    <label>Name: <input type="text" id="newName" required></label>
    <label>Age: <input type="number" id="newAge" required></label>
    <label>Skill: <input type="text" id="newSkill" required></label>
    <button type="submit">Add Student</button>
`;
addStudentForm.style.margin = "2rem 0";
document.querySelector("main").appendChild(addStudentForm);

addStudentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("newName").value.trim();
    const age = document.getElementById("newAge").value.trim();
    const skill = document.getElementById("newSkill").value.trim();

    if (name && age && skill) {
        const tableBody = document.querySelector("table tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${name}</td><td>${age}</td><td>${skill}</td>`;
        tableBody.appendChild(newRow);
        updateStudentCount();
        addStudentForm.reset();
    } else {
        alert("Please fill all fields to add a student.");
    }
});

const submittedDataSection = document.createElement("section");
submittedDataSection.innerHTML = `<h2>Submitted Messages</h2><div id="submittedData"></div>`;
document.querySelector("main").appendChild(submittedDataSection);

function displaySubmittedData() {
    const dataContainer = document.getElementById("submittedData");
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    dataContainer.innerHTML = "";

    if (submissions.length === 0) {
        dataContainer.innerHTML = "<p>No messages submitted yet.</p>";
    } else {
        submissions.forEach((item) => {
            const div = document.createElement("div");
            div.style.border = "1px solid #ccc";
            div.style.padding = "0.5rem";
            div.style.marginBottom = "0.5rem";
            div.style.borderRadius = "0.5rem";
            div.innerHTML = `<strong>${item.name} (${item.email}):</strong> <br>${item.message}`;
            dataContainer.appendChild(div);
        });
    }
}