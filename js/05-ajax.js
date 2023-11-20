$(document).ready(function () {
    //Load

    /*
    Ci-bas, on va utiliser la commande "load", avec cette commande
    on peut prendre des données et l'intégrer sur l'élément sélectionné
    */
    //$("#datos").load("https://reqres.in/");

    //Get

    /*
    On utilise la méthode"get" pour lier une propriété d'un objet à une fonction qui
    sera appelée lorsqu'on accédera à la propriété. Avec "get" les données à envoyer
    au serveur sont écrites directement dans l'url.
    */

    $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
        });
    });

    //Post

    /*
    On utilise la méthode "post" pour envoyer des données au serveur
    et de les récupérer. Avec la méthode "post" les paramètres URL sont écrites
    dans la requête HTTP pour le serveur. Les paramètres ne sont donc pas visibles
    pour les utilisateurs et la portée des requêtes "post" est illimitée.
    */

    $("#formulario").submit(function (e) {
        e.preventDefault();
        var usuario = {
            name: $('input[name="first_name"]').val(),
            web: $('input[name="web"]').val()
        };
        console.log(usuario);
        $.post($(this).attr("action"), usuario, function (response) {
            console.log(response);
        }).done(function(){
            alert("Usuario agregado correctamente");
        });
        return false;
    });

    //$.ajax

    /*
    
    */

});