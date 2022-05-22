

$("#add_worker").submit(function(event){
    alert('Data inserted successfully!')
})

$("#update_worker").submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray();
    var data = {}

     $.map(unindexed_array, function(n, i){
        data[n['name']]=n['value']
     })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/workers/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert('Data updated successfully!')
    })

})

if(window.location.pathname =="/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/workers/${id}`,
            "method": "DELETE"
        }
        
        if(confirm("Do realy you want to delete this record?"))
        {
            $.ajax(request).done(function(response){
                alert('Data deleted successfully!')
                location.reload()
            })
        }
    })
}