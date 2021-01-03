var vp = document.getElementById("villaplatzi");
var context = vp.getContext("2d");


var vaca = {
    
    url: "./img/vaca.png",
    cargaOK: false,
    
};

var fondo = {
    
    url: "./img/tile.png",
    cargaOK: false

}
var cantidad = aleatorio(1, 50);

fondo.img = new Image();
fondo.img.src = fondo.url;
fondo.img.addEventListener("load", cargarFondo);

vaca.img = new Image();
vaca.img.src = vaca.url
vaca.img.addEventListener("load", cargarVacas);

// pollo = new Image();
// pollo.src = "./img/vaca.png"
// pollo.addEventListener("load", cargarPollos);

// cerdo = new Image();
// cerdo.src = "./img/cerdo.png"
// cerdo.addEventListener("load", cargarCerdos);

function cargarFondo() {

    fondo.cargaOK = true;
    dibujar();

}
function cargarVacas() {

    vaca.cargaOK = true;
    dibujar();

}


function dibujar () {

    if (fondo.cargaOK == true) {

        context.drawImage(fondo.img, 0, 0);

    }
    if (vaca.cargaOK == true) {

        for (var v=0; v <= cantidad; v++) {

            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x * 80;
            var y = y * 80;
            context.drawImage(vaca.img, x, y);

        }
        console.log(cantidad);

    }
}




function aleatorio (min, max) {

    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min
    
    return resultado;

}