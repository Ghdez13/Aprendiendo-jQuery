$(document).ready(function () {
    console.log("Hola");

    /*
    On utilise la méthode "draggable" pour pouvoir déplacer les cases dans l'interface
    */
    $(".elemento").draggable();

    /*
    On va changer la taille des objets avec l'utilisation de jQuery
    */
    $(".elemento").resizable();

    /*
    On va utiliser la méthode "selectable" pour travailler avec les éléments qu'on sélectionne 
    */
    //$(".lista-seleccionable").selectable();

    /*
    On va utiliser la méthode "sortable" pour déplacer l'élément de la liste où on veut
    */
    $(".lista-seleccionable").sortable({
        update: function (event, ui) {
            console.log("A cambiado la lista");
        }
    });

    /*
    On va utiliser la méthode "droppable", pour savoir quando quelque chose est draggable
    dans une élément droppable.
    */
    $("#area").droppable({
        drop: function () {
            console.log("Has soltado algo dentro del área");
        }
    });

    // les effets
    $("#mostrar").click(function () {
        $(".caja-efectos").toggle("shake", 4000);
    });

    //La utilisation de la méthode "ToolTip"
    //Il y a beaucoup de choses a faire avec la méthode tooltip, on peut visiter le site web de jQuery par plus information

    $(document).tooltip();

    //La méthode "dialog" on l'utilise pour lancer une fenêtre contextuelle
    $("#lanzar-popup").click(function () {
        $("#popup").dialog();

    });

    // la méthode "datepicker", on utilise cette méthode pour la creation d'un calendrier

    $("#calendario").datepicker();

    //La méthode "tabs" on l'utilise pour la creation d'onglets

    $("#pestanas").tabs();

});