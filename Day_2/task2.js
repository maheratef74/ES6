const studentData = new Map();

const addStudent = (name, courses) => {
    studentData.set(name, { Grades: courses });
};

addStudent("Maher", [
    { Coursename: "JavaScript", Grade: "Excellent" },
    { Coursename: "Jquery", Grade: "Good" },
    { Coursename: "CSS", Grade: "V.Good" }
]);

addStudent("Ahmed", [
    { Coursename: "Node.js", Grade: "Excellent" },
    { Coursename: "React", Grade: "V.Good" },
    { Coursename: "HTML5", Grade: "Good" }
]);

addStudent("Sara", [
    { Coursename: "Python", Grade: "Excellent" },
    { Coursename: "Django", Grade: "Excellent" },
    { Coursename: "PostgreSQL", Grade: "V.Good" }
]);

const formatGrades = (grades) => {
    return grades.map(g => `
        <div class="grade-item">
            <strong>${g.Coursename}:</strong> 
            <span class="grade-tag grade-${g.Grade.toLowerCase().replace('.', '')}">
                ${g.Grade}
            </span>
        </div>
    `).join('');
};

const displayAllStudents = () => {
    const fullListDiv = document.getElementById('fullList');
    let htmlContent = "";

    studentData.forEach((value, name) => {
        htmlContent += `
            <div class="student-item">
                <strong>Student: ${name}</strong>
                <div class="grades-list">
                    ${formatGrades(value.Grades)}
                </div>
            </div>
        `;
    });

    fullListDiv.innerHTML = htmlContent;
};

const populateDropdown = () => {
    const selector = document.getElementById('studentSelector');

    studentData.forEach((_, name) => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        selector.appendChild(option);
    });
};

const handleSelection = (event) => {
    const selectedName = event.target.value;
    const resultCard = document.getElementById('selectionResult');
    const nameSpan = document.getElementById('selectedName');
    const gradesOutput = document.getElementById('gradesOutput');

    if (selectedName && studentData.has(selectedName)) {
        const studentInfo = studentData.get(selectedName);
        nameSpan.textContent = selectedName;
        gradesOutput.innerHTML = formatGrades(studentInfo.Grades);
        resultCard.style.display = 'block';
    } else {
        resultCard.style.display = 'none';
    }
};

window.onload = () => {
    displayAllStudents();
    populateDropdown();
    const selector = document.getElementById('studentSelector');
    selector.onchange = (e) => handleSelection(e);
};
