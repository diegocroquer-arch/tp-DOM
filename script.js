//abrir modal//
let create = document.getElementById("create-trip");
create.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("window-notice").style.display = "flex";
  document.getElementById("window-notice .content").style.display = "flex";
});
//abrir modal//

//cerrar modal//

let close_create = document.getElementById("close");
close_create.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("window-notice").style.display = "none";
  document.getElementById("window-notice .content").style.display = "none";
});
//cerrar modal//
