function taxcalc2(){
    var investment2 = document.getElementById("valorinvestimentobrl").value;
    var sale2 = document.getElementById("valorvendabrl").value;
    var brokeragecost = document.getElementById("brokeragecost").value;
    var feecost = document.getElementById("feecost").value;
    var ir=(sale2-investment2-brokeragecost-feecost)*0.15;
    var containertax = document.getElementById("container_darf_4");
    

        containertax.innerHTML = (`O valor é R$ ${ir}`);
    
    if (ir<0)
      containertax.innerHTML=("Você não teve lucro. Não precisa pagar IR");
    }
    
    function unDo2(){
        var containertax = document.getElementById("container_darf_4");
        containertax.innerHTML=("valor tributo 3");
    }
    
    function limit20(){
        var limit = document.getElementById("l4");
    
    if (limit.value == "Não"){
        alert("Não precisa pagar imposto por conta do limite mensal de R$ 20.000");
        return false;
    }}

    function daytrade(){
        var limit2 = document.getElementById("l5");
        var investment2 = document.getElementById("valorinvestimentobrl").value;
        var sale2 = document.getElementById("valorvendabrl").value;
        var containertax = document.getElementById("container_darf_4");
        var ir=(sale2-investment2)*0.19;
        if (limit2.value == "Sim"){
            containertax.innerHTML = (`O valor é R$ ${ir}`);;
            return false;
    }}

    function tickercheck(){
        var asset = document.getElementById("assetbr");
        var containeralert = document.getElementById("a2");

          if (asset.value == "SQIA3"||asset.value =="GSHP3" ||asset.value =="AGRO3" ||
          asset.value =="PRIO3" || asset.value =="CRDE3" ||asset.value =="NUTR3"||asset.value =="FRTA3"){
            containeralert.style.display="block"}
        //alert("Qualquer valor obtido na venda desse não terá incidência no Imposto de Renda, conforme instrução da Receita Federal que durará até 31 de dezembro de 2023.");  
            return false;
    }

    function unDo3(){
        var containeralert = document.getElementById("a2");
        containeralert.style.display=("none");
    }

    function limit20(){
        var limit1 = document.getElementById("l4");
        var containeralert2 = document.getElementById("a3");

        if (limit1.value == "Não"){
                containeralert2.style.display="block"};
            return false;
    }

    function unDo4(){
        var containeralert2 = document.getElementById("a3");
        containeralert2.style.display=("none");
    }

    
