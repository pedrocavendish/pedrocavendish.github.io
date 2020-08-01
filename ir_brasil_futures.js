function taxcalc24(){
    var investment2 = document.getElementById("valorinvestimentobrl4").value;
    var sale2 = document.getElementById("valorvendabrl4").value;
    var brokeragecost = document.getElementById("brokeragecost4").value;
    var feecost = document.getElementById("feecost4").value;
    var ir=(sale2-investment2-brokeragecost-feecost)*0.50;
    var containertax = document.getElementById("container_darf_44");
        containertax.innerHTML = (`O valor é R$ ${ir}`);
    
    if (ir<0)
      containertax.innerHTML=("Você não teve lucro. Não precisa pagar IR");
    }

    function tabhide6(){
        var containerdomestic = document.getElementById("container_domestic_futures");
        var check_stock = document.getElementById("l11");
          if(check_stock.checked==true){
            containerdomestic.style.display="block";}
          else{
            containerdomestic.style.display="none";}
          }
       
  function unDo6(){
    var containerdomestic = document.getElementById("container_domestic_futures");
    containerdomestic.style.display="none";
  }


  function daytrade5(){
    var limit2 = document.getElementById("l54");
    var limit3 = document.getElementById("l64");
    var investment2 = document.getElementById("valorinvestimentobrl4").value;
    var sale2 = document.getElementById("valorvendabrl4").value;
    var containertax = document.getElementById("container_darf_44");
    var ir=(sale2-investment2)*0.50;
    if (limit2.value == "Sim"){
        containertax.innerHTML = (`O valor é R$ ${ir}`)};
}

function daytrade6(){
    var limit3 = document.getElementById("l64");
    var investment2 = document.getElementById("valorinvestimentobrl3").value;
    var sale2 = document.getElementById("valorvendabrl1").value;
    var containertax = document.getElementById("container_darf_44");
    var ir=(sale2-investment2)*0.50;
    if (limit3.value == "Não"){
        containertax.innerHTML = ("ESTE SUCESSO")};
}