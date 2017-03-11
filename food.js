
console.log("writing to console");

var dogFoodContainer = document.getElementById("dogFoodProducts");
function makeDOM(xhrData){

	var productString = `<h1>Dog<br>Food<br>Products</h1>`;
	var currentpProduct;

	for (var i=0; i<xhrData.dog_brands.length; i++) {
		currentProduct = xhrData.dog_brands[i];
		
			productString += `<div class="foodName">`;
			productString += `<h3 class="brandName">${currentProduct.name}</h3>`;

			for (var j=0; j<currentProduct.types.length; j++) {
				productString += `<p class="thisType">${cleanedProductString(currentProduct.types[j].type)}</p>`;
				// productString += `<p class="thisType">${currentProduct.types[j].type.replace("_", " ").charAt(0).toUpperCase()}</p>`;

				for (var k=0; k<currentProduct.types[j].volumes.length; k++) {
					productString += `<p class="thisPrice">${currentProduct.types[j].volumes[k].name}: `
					productString += `$${currentProduct.types[j].volumes[k].price}</p>`;
				} // k loop
			} // j loop	

			productString += `</div>`;
	} // i loop

	dogFoodContainer.innerHTML = productString;
}

function cleanedProductString (foodString) {
	
console.log("foodString :: ", foodString);
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




