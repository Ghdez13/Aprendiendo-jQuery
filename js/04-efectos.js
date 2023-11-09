$(document).ready(function(){
    var caja = $("#caja");
    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");

    mostrar.hide();

    mostrar.click(function(){
        mostrar.hide();
        ocultar.show();        
        //caja.show("slow"); // avec "show" l'attribut est "disabled=none"
        //caja.fadeIn("slow");
        //caja.fadeTo("slow",1);
        caja.slideDown("normal");
    });

    ocultar.click(function(){
        ocultar.hide();
        mostrar.show();
        // caja.hide("slow") 
        //caja.fadeOut("slow");// Avec "fadeIn et fadeOut" on fait l'effet de flou
        //caja.fadeTo("slow",0); //Ici on utilse "fadeTo" pour faire le même effet que ci-dessus, mais on utilise nombres entre 0 et 1 pour jouer avec l'opacité 
        caja.slideUp("normal", function(){
            console.log("Cartel Ocultado"); // on peut ajouter une fonction dans le méthode pour utiuliser une fonction "callback"
        });
    });

    $("#todoEnUno").click(function(){
       // caja.toggle("Slow"); // "Toggle" nous permet de faire la même action que les boutons ci-dessus avec seulment un boutons
       // caja.fadeToggle("normal"); // La même chose mais avec l'effet flou
       caja.slideToggle("normal"); // Effet dérouler
    })

    $("#animame").click(function(){
        caja.animate({
            marginLeft:"500px",
            fontSize:"40px",
            height:"100px"
        },"slow")
        .animate({
            borderRadius:"900px",
            marginTop:"80px"
        }, "slow")
        .animate({
            borderRadius:"0px",
            marginLeft:"0px"
        },"Slow")
        .animate({
            borderRadius:"100px",
            marginTop:"0px"
        },"slow")
        .animate({
            marginLeft:"500px",
            fontSize:"40px",
            height:"100px"
        },"slow")
        ;//Ici on déplace "caja" en rond et change les caractéristiques de "caja"
    });

});