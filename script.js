function mulaiGratis() {
  alert("Terima kasih! Kamu berhasil klik tombol Mulai Gratis.");
}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});