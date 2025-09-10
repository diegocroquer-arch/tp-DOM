//abrir modal//
let create = document.getElementById("create-trip");
create.addEventListener("click", function (e) {
  document.getElementById("window-notice").style.display = "flex";
});
//abrir modal//

//cerrar modal//

let close_create = document.getElementById("close");
close_create.addEventListener("click", function (e) {
  document.getElementById("window-notice").style.display = "none";
  document.getElementById("window-notice .content").style.display = "none";
});
//cerrar modal//

// agregar trip //
let add_trip = document.getElementById("create-button");
let table = document.getElementById("table-trips");
let name_trip = document.getElementById("name-trip-input");

add_trip.addEventListener("click", function (e) {
  let texto = name_trip.value;
  if (texto !== "") {
    console.log(texto);
    let fila = document.createElement("tr");
    let celda = document.createElement("td");
    celda.textContent = texto;
    table.appendChild(fila);
    fila.appendChild(celda);
    name_trip.value = "";
  } else {
    document.getElementById("window-notice").style.display = "none";
    document.getElementById("window-notice .content").style.display = "none";
  }
});
// agregar trip //
