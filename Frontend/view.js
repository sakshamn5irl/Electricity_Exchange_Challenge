

var $ = function(id) {
    return document.getElementById(id);
};
 
function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        xhr = false;
      }
    }
  }
  return xhr;
}
 

function search(){
  //console.log("button test")
  var request = getHTTPObject();
if (request) {
  request.onreadystatechange = function() {
    parseResponse(request);
  };
  request.open("GET",'http://localhost:3000/v1/api/sites', true);
  request.send(null);
  }
}
  


function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
      
           var data = request.responseText;
         var  h = JSON.stringify(data);
	 
	          console.log(h.name);
			      var detail = document.getElementById("view");
            //detail.innerHTML = request.responseText
            
            document.querySelector(".content").innerHTML = data;
             
    }
  }
}



  

