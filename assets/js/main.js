document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".show-more");
  const gallery = document.querySelector(".galery_container_img");

  button.addEventListener("click", () => {
    if (gallery.classList.contains("show-all")) {
      gallery.classList.remove("show-all");
      button.textContent = "Ver Mais";
    } else {
      gallery.classList.add("show-all");
      button.textContent = "Ver Menos";
    }
  });
});
