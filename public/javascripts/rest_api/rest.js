function ajaxPost(data, url, callback){
    var res = $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        success: function (results) {
            res = results
            console.log(res)
            callback()
        },
        data: data
    }).fail(function(msg, err){
        if(err){
            alert('error:' + JSON.stringify(err))
            return err
        }
    });
}


function ajaxGet(url, callback){
    var res = $.ajax({
        url: url,
        type: 'GET',
        contentType: 'application/json',
        success: function (results) {
            res = results
            console.log(res)
            callback(res)
        }
    }).fail(function(msg, err){
        if(err){
            alert('error:' + JSON.stringify(err))
            return err
        }
    });
}