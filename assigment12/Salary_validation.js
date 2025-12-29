function validateSalary() {
    let salary = document.getElementById("salary").value;
    if (salary === "" || salary < 0) {
        alert("Maaş hatası: Maaş boş veya negatif olamaz!");
        return false;
    }
    return true;
}