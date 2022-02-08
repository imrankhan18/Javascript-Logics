var proArr=[];
function productList() {
  var pid =document.getElementById('pid').value;
  var pname =document.getElementById('pname').value;
  var pprice =document.getElementById('pprice').value;

  var proObj={};
  proObj.pid=pid;
  proObj.pname=pname;
  proObj.pprice=pprice;
  
  proArr.push(proObj);
  check(pid, pname, pprice)
  display();


                       //or
  //proArr.push({id:pid,name:pname,price:pprice});





function check(pid, pname, pprice) {
  if (pid == "" || isNaN(pid)) {
    alert("Enter correct ID");
  } else if (isNaN(pname) === false || pname === "") {
    alert("Enter valid Name");
  } else if (isNaN(pprice) || pprice === "") {
    alert("Enter valid price");
  } 
  else {
    return true;
  }
}



function display() {
  var dis="";
  dis+="<table><tr><th>Product Id  </th><th> Product Name </th><th> Product Price </th></tr>";
  for(i=0;i<proArr.length;i++){
    dis+="<tr><td>"+proArr[i].pid+"</td><td>"+proArr[i].pname+"</td><td>"+proArr[i].pprice+"</td></tr>";

  }
  dis+="</table>"

  document.getElementById("result").innerHTML=dis;
  
}

}
