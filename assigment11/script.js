function formSubmitted(event) {
    event.preventDefault();

    let nameRes = checkName();
    if (nameRes == 1) {
        alert("Name must be filled!");
        return;
    }

    let idRes = checkID();
    if (idRes == 1) {
        return;
    }

    let ageRes = checkAge();
    if (ageRes == 1) {
        alert("Age and birthdate do not match!");
        return;
    }

    alert("Form submitted successfully!");
}

function checkName() {
    let nameValue = document.getElementById("name").value;
    if (nameValue.trim() == "") {
        return 1;
    }
    return 0;
}

function checkID() {
    let idValue = document.getElementById("studentID").value;
    if (isNaN(idValue)) {
        alert("Student ID must be only numbers!");
        return 1;
    }
    if (idValue.length != 9) {
        alert("Student ID must be 9 digits!");
        return 1;
    }
    return 0;
}

function checkAge() {
    let inputAge = document.getElementById("age").value;
    let birthDateValue = document.getElementById("birthdate").value;
    
    if (birthDateValue == "" || inputAge == "") {
        return 1;
    }

    let birthYear = new Date(birthDateValue).getFullYear();
    let currentYear = new Date().getFullYear();
    let calculatedAge = currentYear - birthYear;

    if (inputAge != calculatedAge) {
        return 1;
    }
    return 0;
}