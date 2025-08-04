function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const nisn = document.getElementById("nisn").value.trim();

  // Validasi nama: tidak boleh ada angka
  const namaValid = /^[a-zA-Z\s]+$/.test(nama);
  if (!namaValid) {
    alert("Nama tidak boleh mengandung angka atau karakter khusus!");
    return false;
  }

  // Validasi email dengan regex standar
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    alert("Format email tidak valid!");
    return false;
  }

  // Validasi NISN: hanya boleh angka
  const nisnValid = /^[0-9]+$/.test(nisn);
  if (!nisnValid) {
    alert("NISN hanya boleh berisi angka!");
    return false;
  }

  alert("Form berhasil dikirim!");
  return true;
}
