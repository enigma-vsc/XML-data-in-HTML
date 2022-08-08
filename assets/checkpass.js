function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status==200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "./assets/pass.xml", true);
    xmlhttp.send();
}
function myFunction(xml) {
    var i;
    var a=false;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("pass");
    // console.log(x);
    var pw = document.getElementById("pswd").value;
    for (i = 0; i <x.length; i++) {
        // console.log(x[i].getElementsByTagName("pwd")[0].childNodes[0].nodeValue)
         if(pw==x[i].getElementsByTagName("pwd")[0].childNodes[0].nodeValue) {
            a=true;
            break;
         }
    } 
    if(a){
        window.location.replace("show.html");
    }else{
        alert("Wrong PASS KEY!!");
    }
    
}
document.getElementById("buttonS").onclick=function() {loadXMLDoc()};