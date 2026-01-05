// javascript.js
document.addEventListener("DOMContentLoaded", () => {
  const avatarImg = document.getElementById("avatar");
  const dropdown = document.getElementById("dropdown-user");
  const btnTopo = document.getElementById("btn-topo");

  // Dropdown avatar (apenas abrir/fechar menu)
  if (avatarImg && dropdown) {
    avatarImg.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("show");
    });
  }

  // Botão voltar ao topo
  if (btnTopo) {
    window.addEventListener("scroll", () => {
      btnTopo.style.display = window.scrollY > 200 ? "block" : "none";
    });

    btnTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
