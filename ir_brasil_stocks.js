function tickercheck1(){
    var asset = document.getElementById("assetbr1");
    var containeralert = document.getElementById("a21");

      if (asset.value == "SQIA3"||asset.value =="GSHP3" ||asset.value =="AGRO3" ||
      asset.value =="PRIO3" || asset.value =="CRDE3" ||asset.value =="NUTR3"||asset.value =="FRTA3"){
        containeralert.style.display="block"}
    //alert("Qualquer valor obtido na venda desse não terá incidência no Imposto de Renda, conforme instrução da Receita Federal que durará até 31 de dezembro de 2023.");  
        return false;
}

function unDo31(){
    var containeralert = document.getElementById("a21");
    containeralert.style.display=("none");
}

function limit201(){
    var limit1 = document.getElementById("l41");
    var containeralert2 = document.getElementById("a31");

    if (limit1.value == "Não"){
            containeralert2.style.display="block"};
        return false;
}

function unDo41(){
    var containeralert2 = document.getElementById("a31");
    containeralert2.style.display=("none");
}


function taxcalc21(){
    var investment2 = $("#valorinvestimentobrl1").cleanVal()/100;
    var sale2 = $("#valorvendabrl1").cleanVal()/100;
    var brokeragecost = $("#brokeragecost1").cleanVal()/100;
    var feecost = $("#feecost1").cleanVal()/100;
    var ir=(sale2-investment2-brokeragecost-feecost)*0.15;
    var containertax = document.getElementById("container_darf_41");
    var ir2=ir.toFixed(2);
        containertax.innerHTML = (`O valor é R$ ${ir2}`);
    
    if (ir<0)
      containertax.innerHTML=("Você não teve lucro. Não precisa pagar IR");
    }

    function daytrade1(){
        var limit2 = document.getElementById("l51");
        var limit3 = document.getElementById("l61");
        var investment2 = $("#valorinvestimentobrl1").cleanVal()/100;
        var sale2 = $("#valorvendabrl1").cleanVal()/100;
        var containertax = document.getElementById("container_darf_41");
        var ir=(sale2-investment2)*0.19;
        var ir2=ir.toFixed(2);
        if (limit2.value == "Sim"){
            containertax.innerHTML = (`O valor é R$ ${ir2}`)};
    }

    /*function daytrade2(){
        var limit3 = document.getElementById("l61");
        var investment2 = $("#valorinvestimentobrl1").cleanVal()/100;
        var sale2 = $("#valorvendabrl1").cleanVal()/100;
        var containertax = document.getElementById("container_darf_41");
        var ir=(sale2-investment2)*0.15;
        var ir2=ir.toFixed(2);
        if (limit3.value == "Não"){
            containertax.innerHTML = ("ESTE SUCESSO")};
    }*/
