$(document).ready(function(){
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
    update: function(event,ui){
        console.log("A cambiado la lista");
    }
   });

   /*
   On va utiliser la méthode "droppable", pour savoir quando quelque chose est draggable
   dans une élément droppable.
   */
   $("#area").droppable({
    drop: function(){
        console.log("Has soltado algo dentro del área");
    }
   });

   /*
   
   */
$("#mostrar").click(function(){
    $(".caja-efectos").toggle("shake",4000);
});

});