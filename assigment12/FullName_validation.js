function validateFullName() {
    let name = document.getElementById("fullName").value;
    let hasNumber = /\d/.test(name);
    if (name.length < 6) {
        alert("İsim hatası: En az 6 karakter olmalı!");
        return false;
    }
    if (hasNumber) {
        alert("İsim hatası: İsim rakam içeremez!");
        return false;
    }
    return true;
}