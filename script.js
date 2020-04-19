
// DOM ELEMENTS

//Selecting the menus

let selectMain = document.getElementById('attendees');
let selectSub = document.getElementById('audience');

//Results message

let results = document.getElementById('results');


// DATA OBJECTS

let eventSize = {
	small: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  medium: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  large: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  massive: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture']
}

// could the above use a loop to populate the data based on the size + audience of the event? how do we keep it simple stupid?

const resourceList = [
  {
   pack: "10-20 Permaculture",
   title: "Small pack for those in the know",
   description: "A pack for small courses and events attended by people who have some prior knowledge of permaculture. Includes courses and membership info, plus ways to help share the benefits of permaculture.",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  }, 
  {
   pack: "10-20 Some knowledge",
   title: "Small pack with tips on what to learn next",
   description: "A pack for small events with people who are new to permaculture",
   img: "https://freesvg.org/img/1344190736.png"
  },
 {
   pack: "10-20 New",
   title: "Small pack for those brand new to permaculture",
   description: "A pack for small events including beginners resources",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
   {
   pack: "20-50 Permaculture",
   title: "Medium pack for those in the know",
   description: "A medium sized pack for courses and events attended by people who have some prior knowledge of permaculture. Includes courses and membership info, plus ways to help share the benefits of permaculture.",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
   {
   pack: "20-50 Some knowledge",
   title: "Medium pack for those who know a bit",
   description: "This medium sized pack includes further resources for people who know a bit but what to learn more",
   img: "https://as2.ftcdn.net/jpg/01/27/32/41/500_F_127324174_QSBfDhGhWtjLjJPxB6UY9dRTn6Jo3RZJ.jpg.jpg"
  },
  {
   pack: "20-50 New",
   title: "You get the idea",
   description: "A pack for small events including beginners resources",
   img: "https://as2.ftcdn.net/jpg/01/27/32/41/500_F_127324174_QSBfDhGhWtjLjJPxB6UY9dRTn6Jo3RZJ.jpg.jpg"
  },
   {
   pack: "50-100 Permaculture",
   title: "Yes this one is for you",
   description: "A pack for big events",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
   {
   pack: "50-100 some knowledge",
   title: "Big pack for those who know a bit",
   description: "This big resource pack includes further resources for people who know a bit but what to learn more",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
  {
   pack: "50-100 new",
   title: "Up to 100 people - new to permaculture",
   description: "A pack for bigger events including beginners resources",
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

  //add new child options in to the sub menu

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
let both;

selectSub.addEventListener('change', function(){

  selectionTwo = selectSub.options[selectSub.selectedIndex].value;

  console.log(selectionTwo); 

   //This is a conditional ternary operator to codify the combinations of choices. 

    function selectionResults (a, b) {
    return selectionOne === 'small' && selectionTwo === 'Permaculture event'? 0
           : selectionOne === 'small' && selectionTwo === 'Some knowledge of permaculture' ? 1
           : selectionOne === 'small' && selectionTwo === 'New to permaculture' ? 2
           : selectionOne === 'medium' && selectionTwo === 'Permaculture event' ? 3
           : selectionOne === 'medium' && selectionTwo === 'Some knowledge of permaculture' ? 4
           : selectionOne === 'medium' && selectionTwo === 'New to permaculture' ? 5
           : selectionOne === 'large' && selectionTwo === 'Permaculture event' ? 3
           : selectionOne === 'large' && selectionTwo === 'Some knowledge of permaculture' ? 4
           : selectionOne === 'large' && selectionTwo === 'New to permaculture' ? 5
           : selectionOne === 'medium' && selectionTwo === 'Permaculture event' ? 6
           : selectionOne === 'medium' && selectionTwo === 'Some knowledge of permaculture' ? 7
           : selectionOne === 'medium' && selectionTwo === 'New to permaculture' ? 8
           : selectionOne === 'massive' && selectionTwo === 'Permaculture event' ? 9
           : selectionOne === 'massive' && selectionTwo === 'Some knowledge of permaculture' ? 10
           : selectionOne === 'massive' && selectionTwo === 'New to permaculture' ? 11
           : 'Nothing selected';
  };


 both = selectionResults(selectionOne, selectionTwo);
 return both;


});


// 3. Function that takes in the selections and returns case

/*This is a conditional ternary operator to codify the combinations of choices. 
Can either use the default resource for each case based, or amend to use a specific set of
 resource data. */


function displayResource (combined) {
  // Case for different resource pack selections
    switch ( combined ) {
      case 0:
        results.innerHTML = `<p><b>${resourceList[combined].title}</b></p>
        <p><img src="${resourceList[combined].img}"  
        alt="resource pack for such an event" class="pack-image"></p>
        <p>${resourceList[combined].description}</p> <button class="order">Order this pack</button>`;
        break;
      case 1:
        results.innerHTML = `<p><b>${resourceList[combined].title}</b></p>
        <p><img src="${resourceList[combined].img}"  
        alt="resource pack for such an event" class="pack-image"></p>
        <p>${resourceList[combined].description}</p>
        <button class="order">Order this pack</button>`; 
        break;
      case 2:
        results.innerHTML = `<p><b>${resourceList[combined].title}</b></p>
        <p><img src="${resourceList[combined].img}"  
        alt="resource pack for such an event" class="pack-image"></p>
        <p>${resourceList[combined].description}</p> <button class="order">Order this pack</button>`;
        break; 
      case 3:
        results.innerHTML = `<p><b>${resourceList[combined].title}</b></p>
        <p><img src="${resourceList[combined].img}"  
        alt="resource pack for such an event" class="pack-image"></p>
        <p>${resourceList[combined].description}</p>
        <button class="order">Order this pack</button>`;
        break; 
      case 4:
       results.innerHTML = `<p><b>${resourceList[combined].title}</b></p>
        <p><img src="${resourceList[combined].img}"  
        alt="resource pack for such an event" class="pack-image"></p>
        <p>${resourceList[combined].description}</p><button class="order">Order this pack</button>`;
        break; 
      case 5:
        results.innerHTML = `<p><b>${resourceList[combined].title}</b></p>
        <p><img src="${resourceList[combined].img}"  
        alt="resource pack for such an event" class="pack-image"></p>
        <p>${resourceList[combined].description}</p><button class="order">Order this pack</button>`;
        break;
      default:
        results.innerHTML = `<p><b>Sorry you havent selected a thing that exists yet, I will build it soon</b></p>`;
    } 
};

//displayResource(both); this returns a case

// Return the suggestion to the DOM

selectSub.addEventListener('change', function(){
  displayResource(both);
});

