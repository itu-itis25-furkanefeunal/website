function validateExperience() {
    let exp = parseInt(document.getElementById("experience").value);
    let dobValue = document.getElementById("dob").value;
    let age = new Date().getFullYear() - new Date(dobValue).getFullYear();

    if (isNaN(exp) || exp < 0) {
        alert("Deneyim hatası: Deneyim süresi negatif olamaz!");
        return false;
    }
    if (exp > (age - 10)) {
        alert("Deneyim hatası: Deneyim süresi (Yaş - 10) değerinden büyük olamaz!");
        return false;
    }
    return true;
}