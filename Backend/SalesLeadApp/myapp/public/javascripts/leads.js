
function deleteLead(leadID){
        $.ajax({
            url: '/lead/' + leadID + '/delete-json',
            contentType: 'application/json; charset: utf-8',
            dataType: 'json',
            data: JSON.stringify({leadID}),
            type: 'POST',
            success: ((res) =>{
                console.log("Result: ", res)
                $("#" + leadID).remove();
            }),
            error: ((error) =>{
                console.log("Error: ", error);
            })
        });
}