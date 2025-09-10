let open_button = document.getElementById("open-button");
open_button.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("window-notice").style.display = "flex";
  document.getElementById("window-notice .content").style.display = "flex";
});
