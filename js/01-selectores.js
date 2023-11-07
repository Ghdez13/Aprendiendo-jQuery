$(document).ready(function () {

    //le sélecteur d'id
    $("#rojo").css("background", "red")
        .css("color", "white");
    $("#amarillo").css("background", "yellow")
        .css("color", "green");
    $("#verde").css("background","green")
        .css("color","white");


    // Le sélecteur de classe
    var mi_clase = $(".zebra").css("padding","5px");

    $(".sin_borde").click(function(){
        console.log("Click dando en el parrafo");
        $(this).addClass("zebra");
    });

    // Le sélecteur de balises
    var parrafos = $("p").css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass("grande")){
            that.addClass("grande");
        }else{
            that.removeClass("grande");
        }
    });

    // Le sélecteur par attribut
    $("[title='Google']").css("background","#ccc")
                         .css("color","black");
    $("[title='Facebook']").css("background","blue")
                           .css("color","white");
    

    //D'autres choses pour les sélecteurs

    // $("p,a").addClass("margen-superior");

    //Rechercher des éléments avec jQuery
    var busqueda = $("#elemento2").parent().parent().find(".resaltado");

    console.log(busqueda);

});