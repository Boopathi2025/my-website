// Show welcome alert on page load
window.addEventListener("load", () => {
    alert("Welcome to the Skills Test!");
});

// Form validation
const form = document.querySelector("form");
const formMessage = document.createElement("p");
form.appendChild(formMessage);

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
        form.reset();
    }
});

// Change Theme button
const themeBtn = document.createElement("button");
themeBtn.textContent = "Change Theme";
themeBtn.style.margin = "1rem";
themeBtn.style.padding = "0.5rem 1rem";
themeBtn.style.cursor = "pointer";
document.body.insertBefore(themeBtn, document.querySelector("main"));

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Student Counter
const studentTable = document.querySelector("tbody");
const studentCountDisplay = document.createElement("p");
studentCountDisplay.style.fontWeight = "600";
studentCountDisplay.style.margin = "0.5rem 0";
studentCountDisplay.textContent = Total Students: ${studentTable.rows.length};
document.querySelector("section").insertBefore(studentCountDisplay, document.querySelector(".table-wrap"));

// Add Student form
const addStudentForm = document.createElement("form");
addStudentForm.style.marginTop = "1rem";
addStudentForm.innerHTML = `
    <h3>Add Student</h3>
    <input type="text" id="sName" placeholder="Name" required>
    <input type="number" id="sAge" placeholder="Age" required>
    <input type="text" id="sSkill" placeholder="Skill" required>
    <button type="submit" class="btn">Add Student</button>
`;
document.querySelector("section").appendChild(addStudentForm);

addStudentForm.addEventListener("submit", function(e){
    e.preventDefault();

    const sName = document.getElementById("sName").value.trim();
    const sAge = document.getElementById("sAge").value.trim();
    const sSkill = document.getElementById("sSkill").value.trim();

    if(sName && sAge && sSkill){
        const row = document.createElement("tr");
        row.innerHTML = <td>${sName}</td><td>${sAge}</td><td>${sSkill}</td>;
        studentTable.appendChild(row);

        // Update student count
     studentCountDisplay.textContent = Total Students: ${studentTable.rows.length};


        addStudentForm.reset();
    } else {
        alert("Please fill all fields to add a student.");
    }
});