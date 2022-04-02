
    var table = document.getElementById("table1");
    var row = table.insertRow(3);
    var cell1  = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "3";
    cell2.innerHTML = "NEW CELL1";
    cell3.innerHTML = "NEW CELL2";
    var current = 2;
    for (var i = 0, row; row = table.rows[i]; i++) {
        func(i);}
        
    const football = document.getElementById("btncheck1")
    football.addEventListener("click", (allert) => {
        alert("Good choice")
    });
    function func(a){
        console.log(a);
    }