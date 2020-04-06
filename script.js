
// DOM ELEMENTS

//Selecting the menus

let selectMain = document.getElementById('attendees');
let selectSub = document.getElementById('audience');


// DATA OBJECTS

let eventSize = {
	small: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  medium: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  large: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  massive: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture']
}

// could the above use a loop to populate the data based on the size + audience of the event? how do we keep it simple stupid?

let resourceList = [
  {
   pack: "10-20",
   description: "A pack for small events",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
  {
   pack: "20-50",
   description: "A pack for medium events",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
 {
   pack: "1984",
   description: "A pack for big events",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  }
];




// UI CONTROLLER


//Event when event size is selected = next drop down is populated

selectMain.addEventListener('change', function(){
	// Select option
  let selected = eventSize[this.value];
  
  //remove additional sub menu options with while loop
  while(selectSub.options.length > 0) {
  
  selectSub.options.remove(0);
 }

 // Gets the array from the option that was selected
  Array.from(selected).forEach(function(el){

  let option = new Option(el, el);
  //add child option in sub menu

  selectSub.appendChild(option);

  });

});


// function to take the two selections and recommend the appropriate reource pack

 // 1. Event listener for when the  menu selections happen

    //Menu 1. selection

 let selectionOne;

 selectMain.addEventListener('change', function(){

  selectionOne = selectMain.options[selectMain.selectedIndex].value;

  console.log(selectionOne); // only selects the first option??

});

    //Menu 2. selection

let selectionTwo;

selectSub.addEventListener('change', function(){

  selectionTwo = selectSub.options[selectSub.selectedIndex].value;

  console.log(selectionTwo); 

});


// 3. Function that takes in the selections and returns case
function selectionResults (a, b) {
  // Case for different resource pack selections
    switch ( a && b ) {
      case 0:
        resource = "small resource from resourceLIst";
        break;
      case 1:
        resource = "big resource";
        break;
      default:
        resource = "Sorry you haven't chosen anything";
    } 
}


// Return the suggestion to the DOM
//document.getElementById("results").innerHTML = "The most best thing would be " + resource;

