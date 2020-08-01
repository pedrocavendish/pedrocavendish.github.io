/*var investmentUSD = document.getElementById("valorinvestimento").value;*/
/*var ptaxpurchase = document.getElementById("ptaxcompra").value;*/
/*var ptaxsell = document.getElementById("ptaxvenda").value;*/

function taxcalc(){

var investmentUSD = $("#valorinvestimento").cleanVal()/100;
var saleUSD = $("#valorvenda").cleanVal()/100;
var ptaxpurchase = $("#ptaxcompra").cleanVal()/100;
var ptaxsell = $("#ptaxvenda").cleanVal()/100;
var containertax = document.getElementById("container_darf_2");
    var ir = ((saleUSD*ptaxsell) - (investmentUSD*ptaxpurchase)) * 0.15;
    var ir2 = ir.toFixed(2);
    containertax.innerHTML = (`O valor é R$ ${ir2}`);


if (ir<0)
  containertax.innerHTML=("Você não teve lucro. Não precisa pagar IR");
}

function unDo(){
    var containertax = document.getElementById("container_darf_2");
    containertax.innerHTML=("valor tributo 2");
}

function limit35(){
    var limit = document.getElementById("l2");
      if (limit.value == "Não"){
        alert("Não precisa pagar imposto por conta do limite mensal de R$ 35.000");
      return false;
}}

/*function tabhide2(){
    var y = document.getElementById("container_foreign");
    var z = document.getElementById("container_domestic");
    var w= document.getElementsByClassName("investment");
        if (y.style.display === "none") {
          y.style.display = "block"
        } 
        else {
          y.style.display = "none";
        }
        if (z.style.display === "block") {
          z.style.display = "none"
        } 
    }*/

  /*function checkstocks(){
      var checkstockslist = document.getElementById("optionbrazil");
      if(checkstockslist.style.display==="none"){
      checkstockslist.style.display="block"}
      else{
        checkstockslist.style.display="none"
      }}*/

  
  function tabhide3(){
      var containerdomestic = document.getElementById("container_domestic_stocks");
      var check_stock = document.getElementById("l8");
        if(check_stock.checked==true){
          containerdomestic.style.display="block";}
        else{
          containerdomestic.style.display="none";}
        }
     
  
function unDo5(){
  var containerdomestic = document.getElementById("container_domestic_stocks");
  containerdomestic.style.display="none";
}

