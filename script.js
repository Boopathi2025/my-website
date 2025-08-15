<script>
// 1️⃣ Welcome alert
window.addEventListener('load', () => {
    alert("Welcome to the Skills Test!");
});

// 2️⃣ Form validation for Contact form
const contactForm = document.querySelector('form'); // your contact form
const contactMessageDiv = document.createElement('div');
contactMessageDiv.style.marginTop = '1rem';
contactForm.appendChild(contactMessageDiv);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        contactMessageDiv.style.color = 'red';
        contactMessageDiv.textContent = "Please fill in all fields!";
    } else {
        contactMessageDiv.style.color = 'green';
        contactMessageDiv.textContent = "Form submitted successfully!";
        contactForm.reset();
    }
});

// 3️⃣ Change Theme button
const themeBtn = document.createElement('button');
themeBtn.textContent = "Change Theme";
themeBtn.style.display = "block";
themeBtn.style.margin = "2rem auto";
themeBtn.style.padding = "0.5rem 1rem";
themeBtn.style.cursor = "pointer";
document.body.insertBefore(themeBtn, document.querySelector('main'));

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Dark theme CSS
const style = document.createElement('style');
style.textContent = `
.dark-theme { background: #121212; color: #f0f0f0; }
.dark-theme header { background: #1f1f1f; }
.dark-theme .navigator { background: #2a2a2a; }
.dark-theme table { color: #f0f0f0; }
.dark-theme table th { background: #333; }
.dark-theme table tr:nth-child(even) { background: #444; }
.dark-theme table tr:nth-child(odd) { background: #2a2a2a; }
.dark-theme form { background: #333; color: #f0f0f0; }
.dark-theme input, .dark-theme textarea { background: #555; color: #f0f0f0; border: 1px solid #888; }
.dark-theme .btn, .dark-theme button { background: #6200ea; color: #fff; }
`;
document.head.appendChild(style);

// 4️⃣ Student Counter
const studentTable = document.querySelector('table tbody');
const counterDiv = document.createElement('div');
counterDiv.style.margin = "1rem 0";
counterDiv.style.fontWeight = "bold";
document.querySelector('main').insertBefore(counterDiv, studentTable);

function updateStudentCount() {
    const count = studentTable.querySelectorAll('tr').length;
    counterDiv.textContent = `Total Students: ${count}`;
}
updateStudentCount();

// 5️⃣ Add Student Form (Separate from Contact form)
const addFormContainer = document.createElement('div');
addFormContainer.style.marginTop = '2rem';
addFormContainer.innerHTML = `
    <h3>Add Student</h3>
    <form id="addStudentForm">
        <input type="text" id="studentName" placeholder="Name" required />
        <input type="number" id="studentAge" placeholder="Age" required />
        <input type="text" id="studentSkill" placeholder="Skill" required />
        <button type="submit">Add Student</button>
    </form>
`;
document.querySelector('main').appendChild(addFormContainer);

const addForm = document.getElementById('addStudentForm');
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('studentName').value.trim();
    const age = document.getElementById('studentAge').value.trim();
    const skill = document.getElementById('studentSkill').value.trim();

    if (name && age && skill) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${name}</td><td>${age}</td><td>${skill}</td>`;
        studentTable.appendChild(tr);
        updateStudentCount();
        addForm.reset();
    } else {
        alert("Fill all fields to add a student!");
    }
});
</script>
