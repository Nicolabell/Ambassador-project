
// DOM ELEMENTS ***

//Selecting the menus
let selectMain = document.getElementById('attendees');
let selectSub = document.getElementById('audience');

//Results message
let results = document.getElementById('results');
document.getElementById('results');



// DATA OBJECTS ***

//Event data
let eventSize = {
	small: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  medium: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  large: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture'],
  massive: ['Select your audience', 'Permaculture event', 'Some knowledge of permaculture', 'New to permaculture']
}

//Resource pack data
const resourceList = [
  {
   pack: "10-20 Permaculture",
   title: "Small pack for those in the know",
   description: "A pack for small courses and events attended by people who have some prior knowledge of permaculture. Includes courses and membership info, plus ways to help share the benefits of permaculture.",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a small pack of resources",
   audience: "permaculture"
  }, 
  {
   pack: "10-20 Some knowledge",
   title: "Small pack with tips on what to learn next",
   description: "A pack for small events with people who are new to permaculture",
   img: "https://freesvg.org/img/1344190736.png",
   imgAlt: "An image of a small pack of resources",
   audience: "someKnowl"
  },
 {
   pack: "10-20 New",
   title: "Small pack for those brand new to permaculture",
   description: "A pack for small events including beginners resources",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a small pack of resources",
   audience: "new"
  },
   {
   pack: "20-50 Permaculture",
   title: "Medium pack for those in the know",
   description: "A medium sized pack for courses and events attended by people who have some prior knowledge of permaculture. Includes courses and membership info, plus ways to help share the benefits of permaculture.",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a medium sized pack of resources",
   audience: "permaculture"
  },
   {
   pack: "20-50 Some knowledge",
   title: "Medium pack - up to fifty people, for those who know a bit",
   description: "This medium sized pack includes further resources for people who know a bit but what to learn more",
   img: "https://as2.ftcdn.net/jpg/01/27/32/41/500_F_127324174_QSBfDhGhWtjLjJPxB6UY9dRTn6Jo3RZJ.jpg",
   imgAlt: "An image of a medium sized pack of resources",
   audience: "someKnowl"
  },
  {
   pack: "20-50 New",
   title: "Up to fifty people new to permaculture",
   description: "A pack for small events including beginners resources",
   img: "https://as2.ftcdn.net/jpg/01/27/32/41/500_F_127324174_QSBfDhGhWtjLjJPxB6UY9dRTn6Jo3RZJ.jpg",
   imgAlt: "An image of a medium sized pack of resources",
   audience: "new"
  },
   {
   pack: "50-100 Permaculture",
   title: "A pack for up to 100 people who know about permaculture",
   description: "A pack for big events",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a large sized pack of resources",
   audience: "permaculture"
  },
   {
   pack: "50-100 some knowledge",
   title: "Big pack for those who know a bit",
   description: "This big resource pack includes further resources for people who know a bit but what to learn more",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a large sized pack of resources",
   audience: "someKnowl"
  },
  {
   pack: "50-100 new",
   title: "Up to 100 people - new to permaculture",
   description: "A pack for bigger events including beginners resources",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a large sized pack of resources",
   audience: "new"
  },
  {
   pack: "100+ Permaculture",
   title: "Big pack for 100+ permaculture crowd",
   description: "A pack for big events",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a pack of resources for a large event",
   audience: "permaculture"
  },
   {
   pack: "100+ people - Someknowledge",
   title: "Big pack for those who know a bit",
   description: "This huge resource pack includes further resources for people who know a bit but what to learn more",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a pack of resources for a large event",
   audience: "someKnowl"
  },
  {
   pack: "100+ people - new ",
   title: "100+ people - new to permaculture",
   description: "A pack for huge events including beginners resources",
   img: "https://static.wixstatic.com/media/dcc1bf_baa1e9e07577441d8a1cb71e2e6bc176~mv2.jpg",
   imgAlt: "An image of a pack of resources for a large event",
   audience: "new"
  }
];

// Individual resources data
const resources = [ 
  {
    title: "What is permaculture?",
    type: "Leaflet",
    audiences: ["new"],
    count: 10,
    weight: 93.5
  },
  {
    title: "An intro to forest gardening",
    type: "Leaflet",
    audiences: ["someKnowl", "permaculture"],
    count: 10,
    weight: 93.5
  },
  {
    title: "Permaculture Ethics, an intro",
    type: "Leaflet",
    audiences: ["new"],
    count: 10,
    weight: 75.2
  },
  {
    title: "WeLoveLiving",
    type: "Postcard pack",
    audiences: ["new", "someKnowl"],
    count: 20,
    weight: 180.4
  },
  {
    title: "GROW leaflet",
    type: "Leaflet",
    audiences: ["new", "someKnowl", "permaculture"],
    count: 10,
    weight: 87
  },
   {
    title: "The Diploma in Applied Permaculture Design",
    type: "Leaflet",
    audiences: ["someKnowl", "permaculture"],
    count: 10,
    weight: 87
  },
   {
    title: "What next after your Permaculture Design Course?",
    type: "Leaflet",
    audiences: ["someKnowl", "permaculture"],
    count: 10,
    weight: 87
  },
  {
    title: "Become a Permaculture Ambassador",
    type: "Leaflet",
    audiences: ["someKnowl", "permaculture"],
    count: 10,
    weight: 87
  },

];

//Banners 
const banners = [
 {
    title: "Join the Permaculture Association",
    type: "Banner",
    audiences: ["new", "someKnowl", "permaculture"],
    count: 1,
    weight: 3200
  }

];



// UI CONTROLLER ***

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
});

  
  //Menu 2. selection
let selectionTwo;
let both;

selectSub.addEventListener('change', function() {
  selectionTwo = selectSub.options[selectSub.selectedIndex].value;
   //This is a conditional ternary operator to codify the combinations of choices. 
    function selectionResults(a, b) {
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
function displayResource(combined) {
  // variable to contain results message
  let resultsHTML = `<p><b>${resourceList[combined].title}</b></p>
      <p><img src="${resourceList[combined].img}"  
      alt="${resourceList[combined].imgAlt}" class="pack-image"></p>
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

 // Listens on new confirm button for pack selection
  let newbutton = document.getElementsByTagName('button')[0];     
  newbutton.addEventListener("click", function() {
    // Reset packingList in case of prev selection
  while (packingList.length > 0) {
    packingList.pop();
  }
  buttonGet();
 })

};

//displayResource(both); this returns a case

 // Return the suggestion to the DOM
 selectSub.addEventListener('change', function() {
   displayResource(both);
 });



// ******* function that calculates and stores the resource pack based on the id of the button generated *******
let packingList = [];
let packWeight = 0;

function buttonGet() {
  let button = parseInt(document.getElementsByClassName('order')[0].id);
  
 // 1. Create new array and multiply resources based on event size
 function packingListCreate(multiple) {

  // Determin audience based on pack number
  let packAud;

  if (button === 0 || button === 3 || button === 6 || button === 9) {
    packAud = "permaculture";
  } else if (button === 1 || button === 4 || button === 7 || button === 10) {
    packAud = "someKnowl";
  } else if (button === 2 || button === 5 || button === 8 || button === 11) {
    packAud = "new";
  } else {
    return;
  };

  packingList = [];
  //filter the resource based on comparison of audience and then map those objects to new packing list
      packingList = resources
      .filter(x => x.audiences[0] === packAud || x.audiences[1] === packAud || x.audiences[2] === packAud)
      .map(x =>  {
      return {
      ...x,                       // This spreads the new objects into the new array
      count: x.count * multiple,  // This multiplies the count of each object by a given number
      weight: x.weight * multiple // Mulitply weight by given number
      };

    });
  
}; 


// 2. function to show appropriate packing list displayed and confirm / cancel buttons
function orderConf() {
var displayOrder = '';
 // Loop over packingList and display data nicely
packingList.forEach(ordered => displayOrder 
  +=  `<p>` 
  + ordered.count 
  +  ' x '  
  + ordered.title 
  +  ' - ' 
  + ordered.type + `</p>`);

 // Return variable as displayed message
results.innerHTML = `<p><b>You are about to order:</b></p> <p>${displayOrder}</p>
<br>
<p><i>Suggested donation for postage and packing: £${postage.toFixed(2)}</i></p><p><b>Please confirm</b></p>
<button id="confirm" role="button">Confirm</button><button id="cancel" role="button">Cancel</button>`;

 //Confirm and cancel buttons cached
let confirm = document.getElementById('confirm');
let cancel = document.getElementById('cancel');

 // Confirm and cancel order  - event listeners
cancel.addEventListener('click', function() {
   results.innerHTML = `<p><b>Order cancelled. Please make another selection or return to the site.</b></p>`
   selectMain.value = selectMain[0].value;
    while(selectSub.options.length > 0) {
    selectSub.options.remove(0);
  }

 });

confirm.addEventListener('click', function() {
   results.innerHTML = `<h2>Thank you for your order!</h2><p>Email address and postal address will be collected at this point</p>`
    selectMain.value = selectMain[0].value;
    while(selectSub.options.length > 0) {
    selectSub.options.remove(0);
  }

 });


};


// 3. function calculates weight of all resources in pack
function weightCalc() {
  packWeight = 0;
  for(let i = 0; i < packingList.length; i++) {
     packWeight += packingList[i].weight;
  }
console.log(packWeight);
  //Cost of postage based on weight + 30g packaging
 function postPackCalc() {
  packWeight += 30;
   return packWeight <= 100 ? 0.65
          : packWeight > 100 && packWeight <= 250 ? 0.88
          : packWeight > 250 && packWeight <= 500 ? 1.83
          : packWeight > 500 && packWeight <= 750 ? 2.48
          : packWeight > 750 && packWeight <= 1000 ? 3.10
          : packWeight > 1000 && packWeight <= 2000 ? 5.20
          : packWeight > 2000 && packWeight <= 5000 ? 8.99
          : packWeight > 5000 && packWeight <= 10000 ? 20.25
          : 28.55;

 }
 postage = postPackCalc(packWeight);

}
 
 

 // 5. Run through case 
  if (button === 0 || button === 1 || button === 2) {
     console.log("small details");
     packingListCreate(2);
     weightCalc(packingList);
     orderConf();
  } else if (button === 3 || button === 4 || button === 5) {
     console.log("medium details");
     packingListCreate(4);  // This is where the resources in each pack are multiplied
     weightCalc(packingList);
     orderConf(packingList);
  } else if (button === 6 || button === 7 || button === 8)  {
     console.log("large details");
     packingListCreate(8);  // This is where the resources in each pack are multiplied
     weightCalc(packingList);
     orderConf();
  } else if (button === 9 || button === 10 || button === 11)  {
     console.log("massive details");
     packingListCreate(15);  // This is where the resources in each pack are multiplied
     weightCalc(packingList);
     console.log(packWeight);
     orderConf();
  } else {
     console.log("none selected");

  }; 


};


