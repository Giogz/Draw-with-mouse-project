
document.addEventListener("mousemove", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse(evento)
{
    var colorcito =("brown");
    if (evento.buttons == 1)
    {
        var xi= evento.layerX;
        var yi= evento.layerY;
        var xf = xi + evento.movementX;
        var yf = yi + evento.movementY;
        dibujarLinea(colorcito, xi, yi, xf, yf, papel)
    }
}