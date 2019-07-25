var i = "0";
i = parseInt(i, 10);
document.getElementById("bournvita").value = i;
document.getElementById("milk").value = i;
document.getElementById("bread").value = i;
function addborn(){
    b = parseInt((document.getElementById("bournvita").value), 10);
    b++;
    document.getElementById("bournvita").value = b;
}

function suborn(){
    a = parseInt((document.getElementById("bournvita").value), 10);
    if(a>=1){
        a--;
    }
    else{
        0;
    }
    document.getElementById("bournvita").value = a;
}

function addmil(){
    b = parseInt((document.getElementById("milk").value), 10);
    b++;
    document.getElementById("milk").value = b;
}

function submil(){
    a = parseInt((document.getElementById("milk").value), 10);
    if(a>=1){
        a--;
    }
    else{
        0;
    }
    document.getElementById("milk").value = a;
}


function addbread(){
    b = parseInt((document.getElementById("bread").value), 10);
    b++;
    document.getElementById("bread").value = b;
}

function subread(){
    a = parseInt((document.getElementById("bread").value), 10);
    if(a>=1){
        a--;
    }
    else{
        0;
    }
    document.getElementById("bread").value = a;
}

function sum(){
    var bourn= parseInt((document.getElementById("bournvita").value), 10);
    var mil= parseInt((document.getElementById("milk").value), 10);
    var bread= parseInt((document.getElementById("bread").value), 10);
    var bourncost= (bourn * 405.00);
    var milcost= (mil * 300.23);
    var breadcost= (bread * 100.50);
    var totalcost= bourncost + milcost + breadcost;
    alert("The total cost of the items purchased is N"+ totalcost);
}
