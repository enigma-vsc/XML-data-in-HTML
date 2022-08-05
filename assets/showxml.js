function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "./assets/emptable.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table='<thead><tr><th><span class="text">Emp ID</span></th><th><span class="text">EMP Name</span></th><th><span class="text">EMP Mob</span></th><th><span class="text">EMP Add</span></th></tr></thead>';
  var x = xmlDoc.getElementsByTagName("emp");
  table+="<tbody>";
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("emp_id")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("emp_name")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("emp_mob")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("emp_add")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  table+="</tbody>";
  document.getElementById("demo").innerHTML = table;
}
loadXMLDoc()
