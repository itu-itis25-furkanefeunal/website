function validateDOB() {
    let dobValue = document.getElementById("dob").value;
    if (!dobValue) {
        alert("Tarih hatası: Lütfen doğum tarihinizi seçin!");
        return false;
    }
    let age = new Date().getFullYear() - new Date(dobValue).getFullYear();
    if (age <= 17 || age >= 36) {
        alert("Yaş hatası: Yaşınız 18 ile 35 arasında olmalıdır!");
        return false;
    }
    return true;
}