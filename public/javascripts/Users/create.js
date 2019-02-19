$( document ).ready(function() {
    bindClickEvents();
});

function bindClickEvents(){
     $( ".submit" ).on('click' ,function( event ) {
         var fullName = $( "#fullName" ).val()
         var phone = $( "#phone" ).val()
         var birthday = $( "#birthday" ).val()
         var email = $( "#email" ).val()

         var user = {"FullName":fullName,"Birthday":birthday,"Email":email, "Phone":phone}
         saveUser(JSON.stringify(user), function(){
            window.location.href='list'
         })

     });
}


function saveUser(user, callback){
    ajaxPost(user, '/users/create', callback)
}