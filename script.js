// Show welcome alert on page load
window.addEventListener("load", () => {
    alert("Welcome to the Skills Test!");
    updateStudentCount();
});

// Form validation
const form = document.querySelector("form");
const formMessage = document.createElement("p");
form.appendChild(formMessage);

form.addEventListener("submit", function (e) {
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
        form.reset();
    }
});

// Theme toggle button
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

// Student counter
const counter = document.createElement("p");
counter.style.textAlign = "center";
counter.style.fontWeight = "600";
document.querySelector("main").insertBefore(counter, document.querySelector("main").firstChild);

function updateStudentCount() {
    const totalStudents = document.querySelectorAll("table tbody tr").length;
    counter.textContent = `Total Students: ${totalStudents}`;
}

// Add Student form
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

addStudentForm.addEventListener("submit", function (e) {
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
