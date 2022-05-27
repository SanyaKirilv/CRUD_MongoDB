

$("#add_worker").submit(function(event){
    alert('Data inserted successfully!')
})

$("#add_transaction").submit(function(event){
    alert('Data inserted successfully!')
})

$("#add_work").submit(function(event){
    alert('Data inserted successfully!')
})

$("#add_worktype").submit(function(event){
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

$("#update_transaction").submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray();
    var data = {}

     $.map(unindexed_array, function(n, i){
        data[n['name']]=n['value']
     })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/transactions/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert('Data updated successfully!')
    })

})

$("#update_work").submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray();
    var data = {}

     $.map(unindexed_array, function(n, i){
        data[n['name']]=n['value']
     })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/works/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert('Data updated successfully!')
    })

})

$("#update_workеtypes").submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray();
    var data = {}

     $.map(unindexed_array, function(n, i){
        data[n['name']]=n['value']
     })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/worktypes/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert('Data updated successfully!')
    })

})

if(window.location.pathname =="/workers"){
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

if(window.location.pathname =="/transactions"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/transactions/${id}`,
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

if(window.location.pathname =="/works"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/works/${id}`,
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

if(window.location.pathname =="/worktypes"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/worktypes/${id}`,
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