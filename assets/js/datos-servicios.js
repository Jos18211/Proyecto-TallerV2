window.onload = callService;
var datos;
var urlApp = " https://jos18211.github.io/serviciosjson/servicios.json";

function callService() {
    $.ajax({
        url: urlApp,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onSuccess(data) {
    console.log(data);
    datos = data;
    procesarDatos();

}

function onError(jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL " + urlApp);
}


function procesarDatos() {
    let divnacionalidad = document.getElementById("pintar-servicios");
    let htmlDinamico = "";

    datos.servicios.forEach(servicio => {



        htmlDinamico += "<div class='col-lg-4 col-md-6 mt-4 mt-md-0'>";
        htmlDinamico += "  <div class='box recommended' data-aos='zoom -in '>";
        htmlDinamico += "<h3>" + servicio.nombre + "</h3>";
        htmlDinamico += "<h4><span>Desde</span><sup>₡</sup>" + servicio.precio + "</h4>";
        htmlDinamico += "<ul>";
        htmlDinamico += "<li>" + servicio.descripcion + "</li>";
        htmlDinamico += "   </ul>";
        htmlDinamico += " </div>";
        htmlDinamico += "</div>";



    });

    divnacionalidad.innerHTML = "";
    divnacionalidad.innerHTML = htmlDinamico;
    console.log(htmlDinamico);
}


