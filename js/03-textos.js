$(document).ready(function(){
    console.log($("a").length); //Ici nous somme en train de compter les balises du DOM. 

    reloadlinks();

    $("#add_button")
    .removeAttr("disabled") //
    .click(function(){
        $("#menu").append(`<li><a href = ${$("#add_link").val()} ></a></li>`);
        $("#add_link").val("");
        reloadlinks();
    });
      
});

function reloadlinks(){
    $("a").each(function(index){ // Ici, on est en train de parcourir le DOM
        var that = $(this);
        var enlace =that.attr("href"); //Ici nous sommes en train de prendre les URLs
        that.attr("target","_blank");//Ici on dit que les nouvelles site webs s'ouvrent dans un onglet séparé 
        that.text(enlace); // Ici, on va montrer les URLs dans les balises "a"
    });
}