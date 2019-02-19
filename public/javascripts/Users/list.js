$(document).ready( function () {
    //$('#UsersTB').DataTable();

    getUsers((data) =>{
        console.log('OKOK:' + data.recordset)
        createTable()
        $('#UsersTB').DataTable();
        bindData2Table(data.recordset);
    })
} );


function getUsers(callback){
    ajaxGet('/users/list/get', callback)
}


function bindData2Table(rows){

    //remove dataTables_empty message
    if(rows.length > 0){
        $('.dataTables_empty').remove();
    }

    $(rows).each(function(i, row) {
        console.log('add row ' + i + 'to the table')
        addRow2Table(row)
      });

}

function addRow2Table(row){
    var row  = '<tr><td>' + row.FullName +  '</td><td>' + row.Birthday +  '</td><td>' + row.Email +  '</td></td>' +  '</td><td>' + row.Phone +  '</td></tr>'
    $('#UsersTB > tbody:last-child').append(row)
}


function createTable(){
    //<table id="UsersTB" class="display"><thead><tr><th>Full Name</th><th>Birthday</th><th>Email</th><th>Phone</th></tr></thead><tbody>
    var table = '<table id="UsersTB" class="display"><thead><tr><th>Full Name</th><th>Birthday</th><th>Email</th><th>Phone</th></tr></thead><tbody>'
    $( "body" ).append(table)
    //$('#UsersTB').DataTable();
}