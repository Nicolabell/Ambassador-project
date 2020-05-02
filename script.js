
// DOM ELEMENTS

//Selecting the menus
let selectMain = document.getElementById('attendees');
let selectSub = document.getElementById('audience');

//Results message
let results = document.getElementById('results');


// DATA OBJECTS

//Event data
let eventSize = {
	small: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  medium: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  large: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  massive: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture']
}

// could the above use a loop to populate the data based on the size + audience of the event? how do we keep it simple stupid?

//Resource pack data
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
   img: "https://as2.ftcdn.net/jpg/01/27/32/41/500_F_127324174_QSBfDhGhWtjLjJPxB6UY9dRTn6Jo3RZJ.jpg"
  },
  {
   pack: "20-50 New",
   title: "You get the idea",
   description: "A pack for small events including beginners resources",
   img: "https://as2.ftcdn.net/jpg/01/27/32/41/500_F_127324174_QSBfDhGhWtjLjJPxB6UY9dRTn6Jo3RZJ.jpg"
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
  },
  {
   pack: "100+ Permaculture",
   title: "Yes this one is for you",
   description: "A pack for big events",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
   {
   pack: "100+ people - knowledge",
   title: "Big pack for those who know a bit",
   description: "This huge resource pack includes further resources for people who know a bit but what to learn more",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  },
  {
   pack: "100+ people - new ",
   title: "100+ people - new to permaculture",
   description: "A pack for huge events including beginners resources",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg"
  }
];

// Individual resources data
const resources = [ 
  {
    title: "Join the Permaculture Association",
    type: "banner",
    audiences: ["new", "someKnowl", "permaculture"],
    count: 1,
    weight: 3200
  },
  {
    title: "An intro to forest gardening",
    type: "leaflet",
    audiences: ["someKnowl", "permaculture"],
    count: 10,
    weight: 93.5
  },
  {
    title: "Permaculture Ethics - an intro",
    type: "leaflet",
    audiences: ["new", "someKnowl"],
    count: 10,
    weight: 75.2
  },
  {
    title: "WeLoveLiving post cards",
    type: "postcard pack",
    audiences: ["new", "someKnowl"],
    count: 20,
    weight: 180.4
  },
  {
    title: "GROW leaflet",
    type: "Leaflet",
    audiences: ["new", "someKnowl"],
    count: 10,
    weight: 87
  },

];


// UI CONTROLLER


//Event when event size is selected = next drop down is populated
selectMain.addEventListener('change', function() {
	// Select option
  let selected = eventSize[this.value];
  
  //remove additional sub menu options with while loop
  while(selectSub.options.length > 0) {
  
  selectSub.options.remove(0);

  //remove previous selection from results display
  results.innerHTML = `<p>We suggest....</p>`;


 }

  // Gets the array from the option that was selected
  Array.from(selected).forEach(function(el) {

  let option = new Option(el, el);

  //add new child options in to the sub menu
  selectSub.appendChild(option);

  });

});


 // function to take the two selections and recommend the appropriate resource pack

 // Menu 1. selection - Event listener for when the menu selections happen
 let selectionOne;

 selectMain.addEventListener('change', function() {

  selectionOne = selectMain.options[selectMain.selectedIndex].value;

  console.log(selectionOne); // only selects the first option??

});

  
  //Menu 2. selection

let selectionTwo;
let both;

selectSub.addEventListener('change', function() {

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
           : selectionOne === 'large' && selectionTwo === 'Permaculture event' ? 6
           : selectionOne === 'large' && selectionTwo === 'Some knowledge of permaculture' ? 7
           : selectionOne === 'large' && selectionTwo === 'New to permaculture' ? 8
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
  // variable to contain results message
  let resultsHTML = `<p><b>${resourceList[combined].title}</b></p>
      <p><img src="${resourceList[combined].img}"  
      alt="resource pack for such an event" class="pack-image"></p>
      <p>${resourceList[combined].description}</p> 
      <button class="order" id="${[combined]}">Order this pack</button>`;
  // Case for different resource pack selections
  switch (combined) {
    case 0:
      results.innerHTML = resultsHTML;
      break;
    case 1:
      results.innerHTML = resultsHTML; 
      break;
    case 2:
      results.innerHTML = resultsHTML; 
      break;
    case 3:
      results.innerHTML = resultsHTML; 
      break;
    case 4:
      results.innerHTML = resultsHTML; 
      break; 
    case 5:
      results.innerHTML = resultsHTML; 
      break;
    case 6:
      results.innerHTML = resultsHTML; 
      break;
    case 7:
      results.innerHTML = resultsHTML; 
      break;
    case 8:
      results.innerHTML = resultsHTML; 
      break;
    case 9:
      results.innerHTML = resultsHTML; 
      break;
    case 10:
      results.innerHTML = resultsHTML; 
      break;
    case 11:
      results.innerHTML = resultsHTML; 
      break;
    case 12:
      results.innerHTML = resultsHTML; 
      break;
    case 13:
      results.innerHTML = resultsHTML; 
      break;
    default:
      results.innerHTML = `<p>We suggest...unless it doesnt exit</p>`;
} 

  let newbutton = document.getElementsByTagName('button')[0];      //can re-use this later on, maybe return it? uhhh
  console.log(newbutton);
  newbutton.addEventListener("click", function() {
  while (packingList.length > 0) {
    packingList.pop();
  } // clear packing list so it doesnt calculate again? doesnt work
  buttonGet();
 })

};

//displayResource(both); this returns a case

 // Return the suggestion to the DOM

 selectSub.addEventListener('change', function() {
   displayResource(both);
 });



// function calculates weight of all resources in pack
 let packWeight = 0;
// function weightCalc () {
//  for (let i = 0; i > packingList.length; i++) {
    //  console.log(packingList[i].weight);
     // packWeight = 2;
  //  };
// };




// ******* function that calculates and stores the resource pack based on the id of the button generated *******
let packingList = [];

function buttonGet () {
  let button = parseInt(document.getElementsByClassName('order')[0].id);
  

 // 1. Create new array and multiply resources based on event size
 function packingListCreate(multiple) {
  packingList = [];
       packingList = resources.map(x =>  {
      return {
      ...x,                        // This spreads the new objects into the new array
      count: x.count * multiple   // This multiplies the count of each object by a given number
      };


    });
  
}; 


 // 2. function to show confirmation pop up with appropriate packing list displayed

function orderConf () {

  let r = confirm(`You are about to order ${JSON.stringify(packingList)}, please confirm`);
  if (r == true) {
    console.log("The leaflet pack is on order");
  } else {
    console.log("The order is cancelled");
  }

};


// loops through packing list to add up weight
function weightCalc (packingList) {
  for(let i = 0; i < packingList.length; i++) {
    console.log("do something");
  }
}

 

 // 3. Run through case 

  if (button === 0 || button === 1 || button === 2) {
     console.log("small details");
     packingListCreate(1);
     weightCalc();
     console.log(packingList);
     console.log(packWeight);
     orderConf();
  } else if (button === 3 || button === 4 || button === 5) {
     console.log("medium details");
     packingListCreate(2);  // This is where the resources in each pack are multiplied
     //weightCalc();
     orderConf();
  } else if (button === 6 || button === 7 || button === 8)  {
     console.log("large details");
     packingListCreate(3);  // This is where the resources in each pack are multiplied
     //weightCalc();
     orderConf();
  } else if (button === 9 || button === 10 || button === 11)  {
     console.log("massive details");
     packingListCreate(5);  // This is where the resources in each pack are multiplied
     //weightCalc();
     orderConf();
  } else {
     console.log("none selected");

  }; 



};


//get the resources list, loop through, if the right audience isnt in the list then skip, otherwise X by the right amount depending on the case
  //Spread the new data into an array or table?

