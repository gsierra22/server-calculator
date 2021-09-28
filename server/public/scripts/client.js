$ (document).ready(onReady);

function onReady(){
    getEquation();
    $('.symbol').on('click',setSymbol)
    $('#equaler').on('click',math)
    $('#clearer').on('click',clearButton)
    
}

let collection=[]

let symbol=''

function setSymbol(){
   symbol= $(this).html();
   console.log(symbol);
}
function getEquation(){
    $.ajax ( { 
        method: 'GET', 
        url: '/math' 
    }).then(function(response) {
        let equationPost = $('#inputDiv');
        console.log(response)
        equationPost.empty();
        for(let i=0; i<response.length; i++) {
            equationPost.append(
                `<li> ${response[i].num1} ${response[i].formula} ${response[i].num2} = ${response[i].answer}</li>`
            );
        };
    }).catch( function (err) {
        console.log('error:', err);
    })
}
function math(){
    let mathToSend= {
        num1: $('#numberBox').val(),
        formula: symbol,
        num2: $('#secondBox').val(),
        
    }
    $.ajax({
        method:'POST',
        url:'/final',
        data: mathToSend
     }).then(function(response){
         getEquation();

     }).catch(function(err)
     {alert('server down');
    })
 }
function clearButton(){
    $('#numberBox').val('');
    symbol='';
    $('#secondBox').val('')
}
