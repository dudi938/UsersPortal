function postUser(data, url){
    var res = $.ajax({
        url: url,
        TYPE: 'POST',
        contentType: 'application/json',
        success: function (results) {
            res = results
            console.log(res)
        },
        dataType: "json",
        data: JSON.stringify(data)
    }).fail(function(msg, err){
        if(err){
            alert('error:' + JSON.stringify(err))
            return err
        }
    });
}