$( document ).ready(function() {
    bindClickEvents();
});

function bindClickEvents(){
    $( ".createUserForm" ).submit(function( event ) {
        event.preventDefault();
        // return false
        postData(JSON.parse('{"name": "David", "Phone": "123456789"}'), '/users/create')
      });
}


