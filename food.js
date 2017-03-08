
console.log("writing to console");

var dogFoodContainer = document.getElementById("dogFoodProducts");
function makeDOM(xhrData){

	var productString = "";
	var currentpProduct;

	for (var i=0; i<xhrData.dog_brands.length; i++) {
		currentProduct = xhrData.dog_brands[i];
		
			productString += `<div class="foodName">`;
			productString += `<h3 class="brandName">${currentProduct.name}</h3>`;
// 			productString += `<p>Is a ${currentProduct.type}</p>`;
// 			productString += `<p>Like to eat: ${currentProduct.food}</p>`;     
			productString += `</div>`;
	} // for loop
	dogFoodContainer.innerHTML = productString;
}

function executeThisCodeAfterFileLoaded(){

	var data = JSON.parse(this.responseText);
	console.log("parsed data :: ", data);
	makeDOM(data);
}

function executeThisCodeAfterFileFails(){
	console.log("whoops! error ... ");
}



var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogs.json");
myRequest.send();
console.log("myRequest", myRequest);




