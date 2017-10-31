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
            ret.preventDefaul();

            // define the text we'll be saving 
            var noteText = $("#noteText");

            $.post("/note/" + currentButoon, $("noteForm").serialize())
            .done(function(data){
                populateNote(currentButton);
            })
            .fail(function(error){
                console.log("could not make the note", error);

            });
            // empty the note 
            noteText.val(" ");

            return false;

        });
    };

    function populateNote(id){

        // empty the div 
        $(".message").empty();


        // read the note 
        $.get("/note/" + id, function (data){

            // roll over the notes and populate them 
            for(var i = 0; i < data.length; i++) {
                var note = $(
                    '<li class="note collection-item">'
                    + '<p>'
                    + (i+1) + ': ' + data[i].noteText + '</p>'
                    + '<button class="individualNoteButton waves-effect waves-light btn-flat red" data-currentButtonId="' + data[i]._id + '">Delete note #' + (i+1) + '</button>'
                    + '</li>'
                );



                // append the note to the div
                $(".message").append(note);
            }
        })
        .then(function(){

            // make a listener for deleteing the notes 
            $(".individualNoteButton").on("click", function(){

                var currentButoonId = $(this).data(currentButoonId);

                // console.log("hit", currentButtonId.currentbuttonid);

                // now make a note delete route and send it the id
                // of the note we want to delete

                $.post("/deleteNote/" + currentButtonId.currentbuttonid, $('#noteForm').serialize())
                .done(function (data) {

                    // after deleting the note, close the modal
                    $('#noteModal').modal('close');
                })

            .fail(function () {
                console.log("could not get notes");
            });

    
        });
    })

}

})
    