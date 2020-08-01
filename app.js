/*$(document).ready(function()
{
var inputvalue = $("#valorinvestimento");
console.log(inputvalue);
    
var formated= $(inputvalue).maskMoney({
         decimal: ".",
         thousands: ",",
         
     });

});*/

var maskforall = $(document).ready(function(){
    var valorvendajq = $('#valorvenda, #valorinvestimento, #ptaxcompra, #ptaxvenda, #valorinvestimentobrl1,#valorvendabrl1, #brokeragecost1, #feecost1' ).mask('000.000.000.000.000,00', {
        reverse: true,
    }); 
});


$(document).ready(function(){
    $("#investmentbrazil").click(function(){
      $("#parexterior").toggle();
      $("#container_foreign").toggle();
      $("#investmentbrazil2").hide();
    });
  });

  $(document).ready(function(){
    $("#investmentbrazil2").click(function(){
      $("#pardomestico").toggle();
      $("#optionbrazil").toggle();
      $("#investmentbrazil").hide();
    });
  });












 






