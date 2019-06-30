var ct = 0;
function new_link()
{
	ct+=1;
	var div1 = document.createElement('div');
	div1.id = ct;
	console.log(div1.id);
	
	var delLink = '<div style="text-align:right;margin-right:65px"><a href="javascript:delIt('+ ct +')">Delete</a></div>';
	div1.innerHTML = document.getElementById('newformtpl').innerHTML + delLink;
	document.getElementById('newform').appendChild(div1);

}

function delIt(eleId)
{	var d = document;
	var ele = d.getElementById(eleId);
	var parentEle = d.getElementById('newform');
	parentEle.removeChild(ele);
	console.log(newform);
}

function deleteChild(){
	var e = document.getElementById('newform'); 

var child = e.lastElementChild;  
while (e.childNodes.length > 2) {
    e.removeChild(e.lastChild);
}
    }