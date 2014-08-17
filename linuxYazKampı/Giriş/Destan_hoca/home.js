/*  //parametre olarak renk alır alınan rengi true ya da false olarak geri döndürür.

function validate(color) {
	var colorArray=["blue","red","purple","green"];
	
	for (var i in colorArray) {
		
		var validColor=colorArray[i];
		if (validColor==color) {
			return true;
		}
	}
	return false;
}
*/

/*  // yakalanacak class ya da tag 'i değişken olarak alır ve önce doğru mu değil mi
	// görmek için validate e yollar dönen değere göre değişikliği yapar ya da yapmaz			
				
function changeColor(query) {

	while (1)
	{
		var color=prompt("what color ? ");
		if (validate(color)) {	
				break;
		}	
	}
	
	var elements=document.querySelectorAll(query);

	elements=Array.prototype.slice.call(elements);	

	for (var i=0;i<elements.length;i++) {		
	
		var e=elements[i];
		 
		e.style.color=color;
		}
}
*/



function changeColorReadingInput() {
	
	var inputElement=document.getElementById('colorInput'); //input 'un içindeki string i okur , inputElement'e atar.
	var color=inputElement.value;									  //inputElement'in değerini renk değişkenine atar.
	
	//changing color
	var query=".sub-title";                                 // sub-title class'ını query değişkenine atar
	var elements=document.querySelectorAll(query);			  //  " yakalar

	elements=Array.prototype.slice.call(elements);				// array olarak tutar ve for da tek tek hepsini değiştirir.

	for (var i=0;i<elements.length;i++) {		

		var e=elements[i];
		 
		e.style.color=color;
		};
}

/*
var dugme=document.getElementById('changeColorBtn');
dugme.onclick=function (event) {
	
	changeColorReadingInput();
}
*/
// changeColor("h2");	



// Sayfa Hazır Olunca Çalış anlamında fonksiyon
/*
$(document).ready(workWhenReady);
function workWhenReady() {
	alert("I am ready");
}
*/

//Bu şekilde kullanırsak sayfa sonunda çağırılan script OK but head call can't work correctly
/*
var elements= $('.sub-title');
console.log(elements.length);

*/


$(document).ready(workWhenReady);

function workWhenReady() {
	var elements=$('.sub-title');
	debugger
	
	console.log("When ready "+ elements.length);
	
	$('#changeColorBtn').click(function () {
	alert('hey');
});

}



















