const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let searchEntry = '';
const NUM_OF_RESULTS = 1000; //I was limiting results but then put them in a scrollable window instead so I set this arbitrarily high

function search(str) {
	let results = [];
	for(let currFruit of fruit){
		if(currFruit.toLowerCase().indexOf(str.toLowerCase()) !== -1){
			results.push(currFruit)	;
		}
	}
	return results;
}

input.addEventListener("keyup", searchHandler);  //keyup

function searchHandler(e) {
	const alphabetRegex = /^[a-zA-Z]$/;

	//user may want to delete some characters
	if(e.key === "Backspace"){
		searchEntry = searchEntry.slice(0,-1);
	//check to make sure we only capture letters
	}else if (alphabetRegex.test(e.key)){
		searchEntry = searchEntry + e.key
	}

	if(searchEntry === ''){
		clearList();
	}
	if(input.value === ''){
		clearList();
		searchEntry = '';
	}
	if(searchEntry !== ''){
		const results = search(searchEntry);
		showSuggestions(results);
	}
}

function showSuggestions(results, inputVal) {
	// clear the list so we start fresh with each input event
	clearList();

	//we want to only display the first 10 results
	let displayLength = results.length > NUM_OF_RESULTS ? NUM_OF_RESULTS : results.length;
	
	for(let i = 0; i<displayLength;i++){
		const newUl = document.createElement("li");
		newUl.textContent = results[i];
		suggestions.appendChild(newUl);
	}
	
}

suggestions.addEventListener('mousedown', function(event) {
	// Prevent text selection behavior when holding the mouse click
	event.preventDefault();
 });

suggestions.addEventListener('mouseup', useSuggestion);
function useSuggestion(e) {
	// TODO
	input.value = e.target.innerText;

	//set the search entry to the suggestion otherwise we see weird behavior when the user backspaces
	searchEntry = e.target.innerText;
 
	//clear the list after the user makes a selection
	clearList();
}

function clearList(){
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	 }
}
