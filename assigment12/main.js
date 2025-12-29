function finalValidation(event) {
    event.preventDefault();

    // Sırayla her fonksiyonu çağırıyoruz
    // Her fonksiyon kendi hatasını alert ile verecek
    if (!validateTCKN()) { clearPreview(); return; }
    if (!validateFullName()) { clearPreview(); return; }
    if (!validateDOB()) { clearPreview(); return; }
    if (!validateSalary()) { clearPreview(); return; }
    if (!validateExperience()) { clearPreview(); return; }

    // Eğer hepsi true dönerse buraya gelir
    alert("Application accepted!");
    generatePreview();
}

function generatePreview() {
    let tckn = document.getElementById("tckn").value;
    let name = document.getElementById("fullName").value;
    let dob = document.getElementById("dob").value;
    let age = new Date().getFullYear() - new Date(dob).getFullYear();
    let salary = document.getElementById("salary").value;
    let exp = document.getElementById("experience").value;

    document.getElementById("previewBox").value = 
        "TCKN: " + tckn + "\n" +
        "Full Name: " + name + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Age: " + age + "\n" +
        "Salary: " + salary + "\n" +
        "Experience: " + exp + " years";
}

function clearPreview() {
    alert("Application rejected!");
    document.getElementById("previewBox").value = "";
}