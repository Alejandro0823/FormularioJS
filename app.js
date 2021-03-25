function cambiarvalor(){

    let select = document.getElementById("selection").value
    
    if(select == '1'){
        document.getElementById('Rusia').style.display = 'flex';
        document.getElementById('Colombia').style.display = 'none';
        document.getElementById('España').style.display = 'none';
    }
    else if (select == '2'){
        document.getElementById('Rusia').style.display = 'none';
        document.getElementById('Colombia').style.display = 'flex';
        document.getElementById('España').style.display = 'none';
    }
    else if (select == '3'){
        document.getElementById('Rusia').style.display = 'none';
        document.getElementById('Colombia').style.display = 'none';
        document.getElementById('España').style.display = 'flex';
    }
 }