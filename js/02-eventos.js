$(document).ready(function () {

    //MouseOver et MouseOut

    /*
    L'événement ci-bas, on l'utilise pour effectuer une action
    lorsque la souris passe ou arrête de passer sur l'élément
    */

    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background","red");
    // });
    // caja.mouseout(function(){
    //     $(this).css("background","green");
    // });


    //Hover

    /*
    Avec l'exemple ci-bas nous pouvons faire sans utiliser
    autant de code le même effect que les lignes précédentes
    */

    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    // click, doble click

    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "red");
    });


    //Focus et Blur

    /*
    Avec cet événement on peut faire une action lorsqu'on
    est focus sur un élément HTML et une autre action quand on quitte de cet élément. 
    */
    var nombre = $("#nombre")
    var datos = $("#datos")

    nombre.focus(function () {
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function () {
        $(this).css("border", "1px solid gray");
        datos.text($(this).val()).show(); // ici on utilse le méthode text pour prendre le valeur du input
    });

    //Mousedown et Mouseup

    /*
    La difference entre le méthode "click" est le méthode "mousedown"
    est que l'action du "click" est exécutée lorsque le click a fini,
    tandis que l'autre est exécutée dès que on clique. Si on utilise les
    deux événements le première sera "mousedown"
    */

    datos.mousedown(function () {
        $(this).css("border-color", "red");
    });

    datos.mouseup(function () {
        $(this).css("border-color", "purple");
    });


    //Mousemove

    /*
    Avec l'utilisation de cette méthode nous capturons
    le mouvement de la souris
    */

    $(document).mousemove(function () {
        $("body").css("cursor","none")
        $("#sigueme").css("left", event.clientX)
            .css("top", event.clientY);
    });
});