
var objetoTela = new Object();
objetoTela.ItemTela = 0;

$(function () {
    iniciaQuadrados();
    percorreItens();
})


function percorreItens() {

    for (var i = 0; i < 12; i++) {

        var idDiv = "div_" + i.toString();
        $("#" + idDiv).removeClass("red-quadrado");
        $("#" + idDiv).addClass("white-quadrado");
    }

    var idDiv = "div_" + objetoTela.ItemTela.toString();

    $("#" + idDiv).addClass("red-quadrado");
    $("#" + idDiv).removeClass("white-quadrado");

    if (objetoTela.ItemTela == 11) {
        objetoTela.ItemTela = 0;
    }
    else {
        objetoTela.ItemTela++;
    }

    setTimeout(percorreItens, 1000);

}

function iniciaQuadrados() {
    for (var i = 0; i < 12; i++) {

        var idDiv = "div_" + i.toString();
        $("#container-quadrado").append("<div class ='quadrado' id='" + idDiv + "'> ***FELIZ NATAL***</div>");
    }
}