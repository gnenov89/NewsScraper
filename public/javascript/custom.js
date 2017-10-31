$(document).ready(function(){
$(".button-collapse").sideNav();

    // define the modal 
$("#noteModal").modal({
});

// set up the onclick for the buttons for each note 
$(".noteButton").on("click", function(ret){

    // if we have duplicate listener, stop it from listening 
    ret.stopImmediatePropagation();

    // select to work with 
    var currentButton = $(this).attr("id");

        // call the populateNote function for the button 
        populateNote(currentButton);

        // open the modal
        $("noteModal").modal("open");

        // set up response of clicking the noteButton
        $("#noteButton").on("click", function(ret){


        });
    }
    
    });
    