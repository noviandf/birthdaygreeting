document.addEventListener("DOMContentLoaded", function() {
    
    // Munculkan SweetAlert
    Swal.fire({
      title: 'Notice!',
      text: 'For best experience, buka pake laptop ye 💻',
      icon: 'info',
      confirmButtonText: 'Oke gas?',
      confirmButtonColor: '#3085d6', // Bisa diganti warna favorit/tema web
      backdrop: `
        rgba(0,0,123,0.4)
      `
    });

// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "nopeq" && password === "jelek") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang Nopeq😊",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}

  });