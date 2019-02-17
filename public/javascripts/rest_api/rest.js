function postData(data, url){
    $.ajax({
        url: url,
        type: 'post',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {

        },
        data: JSON.stringify(data)
    }).fail(function(msg, err){
        if(err){
            alert('error:' + JSON.stringify(err))
        }
    });
}