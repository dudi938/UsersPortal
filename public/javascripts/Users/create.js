$( document ).ready(function() {
    //bindClickEvents();
});

function bindClickEvents(){
    // $( ".createUserForm" ).submit(function( event ) {
    //     event.preventDefault();
    //     submitUser();
    // });
}


function submitUser(){
    //read values from fields

    //validate the values

    //submit the user
    postUser({"name": "David", "Phone": "123456789"}, '/users/create')

    //redirect to the list page
    window.location = '../../../views/Users/List.html'
}