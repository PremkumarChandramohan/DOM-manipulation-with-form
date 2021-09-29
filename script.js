function myfunction(){
    var tbl = document.getElementById("myTable");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    cell1.innerHTML =document.getElementById("id1").value;
    cell2.innerHTML =document.getElementById("id2").value;
    cell3.innerHTML =document.getElementById("id3").value;
    cell4.innerHTML =document.getElementById("id4").value;
    cell5.innerHTML =document.getElementById("id5").value;
    cell6.innerHTML =document.getElementById("id6").value;
    cell7.innerHTML =document.getElementById("id7").value;
}
