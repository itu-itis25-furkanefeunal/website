function validateTCKN() {
    let tckn = document.getElementById("tckn").value;
    if (tckn.length !== 9 || isNaN(tckn)) {
        alert("TCKN hatası: Tam olarak 9 rakam girmelisiniz!");
        return false;
    }
    return true;
}