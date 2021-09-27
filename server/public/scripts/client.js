$ (document).ready(onReady);

function onReady(){
    getInventory();
}

function getInventory (){
    console.log(' in getInventory')
    $.ajax({
        method: 'GET',
        url:'/inventory'
    }).then( function(response){
        console.log('back from GET:', response);
    }).catch(function(err){
        alert('server is down');
        console.log(err);
    })
}