function taxcalc22(){
    var investment2 = document.getElementById("valorinvestimentobrl2").value;
    var sale2 = document.getElementById("valorvendabrl2").value;
    var brokeragecost = document.getElementById("brokeragecost2").value;
    var feecost = document.getElementById("feecost2").value;
    var ir=(sale2-investment2-brokeragecost-feecost)*0.20;
    var containertax = document.getElementById("container_darf_42");
    
        containertax.innerHTML = (`O valor é R$ ${ir}`);
    
    if (ir<0)
      containertax.innerHTML=("Você não teve lucro. Não precisa pagar IR");
    }

    function tabhide4(){
        var containerdomestic = document.getElementById("container_domestic_fiis");
        var check_stock = document.getElementById("l9");
          if(check_stock.checked==true){
            containerdomestic.style.display="block";}
          else{
            containerdomestic.style.display="none";}
          }
       
  function unDo6(){
    var containerdomestic = document.getElementById("container_domestic_fiis");
    containerdomestic.style.display="none";
  }
  
   