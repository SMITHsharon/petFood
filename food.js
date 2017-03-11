
var dogFoodContainer = document.getElementById("dogFoodProducts");
var catFoodContainer = document.getElementById("catFoodProducts");

function writeDogDOM(xhrData){

	// write the dog food products to the DOM
	var productString = `<h1 class="sectionHeader">Dog Food Products</h1>`;
	var currentpProduct;

	for (var i=0; i<xhrData.dog_brands.length; i++) {
		currentProduct = xhrData.dog_brands[i];
		
			productString += `<div class="foodName">`;
			productString += `<h3 class="brandName">${currentProduct.name}</h3>`;

			for (var j=0; j<currentProduct.types.length; j++) {
				productString += `<p class="thisType">${cleanedProductString(currentProduct.types[j].type)}</p>`;
				

				for (var k=0; k<currentProduct.types[j].volumes.length; k++) {
					productString += `<p class="thisPrice">${currentProduct.types[j].volumes[k].name}: `
					productString += `$${currentProduct.types[j].volumes[k].price}</p>`;
				} // k loop
			} // j loop	

			productString += `</div>`;
	} // i loop

	dogFoodContainer.innerHTML = productString;
}


function writeCatDOM(xhrData){

	var productString = `<h1 class="sectionHeader">Cat<br>Food<br>Products</h1>`;
	var currentpProduct;

	for (var i=0; i<xhrData.cat_brands.length; i++) {
		currentProduct = xhrData.cat_brands[i];
		
			productString += `<div class="foodName">`;
			productString += `<h3 class="brandName">${currentProduct.name}</h3>`;

			productString += `<p class="breeds">${currentProduct.breeds[0]}`
			for (var j=0; j<currentProduct.breeds.length; j++) {
				productString+= `, ${currentProduct.breeds[j]}`
			}

			
			for (var j=0; j<currentProduct.types.length; j++) {
				productString += `<p class="thisType">${cleanedProductString(currentProduct.types[j].type)}</p>`;
				

				for (var k=0; k<currentProduct.types[j].volumes.length; k++) {
					productString += `<p class="thisPrice">${currentProduct.types[j].volumes[k].name}: `
					productString += `$${currentProduct.types[j].volumes[k].price}</p>`;
				} // k loop
			} // j loop	

			productString += `</div>`;
	} // i loop

	catFoodContainer.innerHTML = productString;
}


function cleanedProductString (foodString) {
	
	tempStr = foodString.replace("_", " ");
	secondCap = false;
	if (tempStr.includes(" ") === true) {
		secondCap = true;
		capIndex = tempStr.indexOf(" ")+1;
	}

	tempStr = foodString.charAt(0).toUpperCase() + tempStr.substr(1);
	if (secondCap) {
		tempStr = tempStr.substr(0, capIndex) + foodString.charAt(capIndex).toUpperCase() + tempStr.substr(5);
	}
	
	return tempStr;
}


function executeTheDogDOMAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	writeDogDOM(data);
}


function executeTheCatDOMAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	writeCatDOM(data);
}

function executeThisCodeAfterFileFails(){
	console.log("whoops! error ... ");
}



var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeTheDogDOMAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogs.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeTheCatDOMAfterFileLoaded);
myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
myRequest2.open("GET", "cats.json");
myRequest2.send();



