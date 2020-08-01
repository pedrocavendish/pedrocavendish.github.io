function taxcalc23(){
    var investment2 = document.getElementById("valorinvestimentobrl3").value;
    var sale2 = document.getElementById("valorvendabrl3").value;
    var brokeragecost = document.getElementById("brokeragecost3").value;
    var feecost = document.getElementById("feecost3").value;
    var ir=(sale2-investment2-brokeragecost-feecost)*0.15;
    var containertax = document.getElementById("container_darf_43");
        containertax.innerHTML = (`O valor é R$ ${ir}`);
    
    if (ir<0)
      containertax.innerHTML=("Você não teve lucro. Não precisa pagar IR");
    }

    function tabhide5(){
        var containerdomestic = document.getElementById("container_domestic_options");
        var check_stock = document.getElementById("l10");
          if(check_stock.checked==true){
            containerdomestic.style.display="block";}
          else{
            containerdomestic.style.display="none";}
          }
       
  function unDo6(){
    var containerdomestic = document.getElementById("container_domestic_options");
    containerdomestic.style.display="none";
  }


  function daytrade3(){
    var limit2 = document.getElementById("l52");
    var limit3 = document.getElementById("l62");
    var investment2 = document.getElementById("valorinvestimentobrl3").value;
    var sale2 = document.getElementById("valorvendabrl3").value;
    var containertax = document.getElementById("container_darf_43");
    var ir=(sale2-investment2)*0.20;
    if (limit2.value == "Sim"){
        containertax.innerHTML = (`O valor é R$ ${ir}`)};
}

function daytrade4(){
    var limit3 = document.getElementById("l61");
    var investment2 = document.getElementById("valorinvestimentobrl3").value;
    var sale2 = document.getElementById("valorvendabrl1").value;
    var containertax = document.getElementById("container_darf_43");
    var ir=(sale2-investment2)*0.15;
    if (limit3.value == "Não"){
        containertax.innerHTML = ("ESTE SUCESSO")};
}
