
/*the first approach by eventlistner*/

// // DOMContentLoaded: to load the html content first 
// document.addEventListener('DOMContentLoaded', () => {
//     // Fetching data from the URL
//     fetch(url) 
//       .then(response =>
//         {
//           if(!response.ok){
//             throw new Error("the network error occured" ,response.status);
//           }
//           return response.json();
//         }
//       )
//       .then(data => displayCoffees(data))  //console.log('coffee data: ',data) )
//       .catch(error => console.error('Error fetching data:', error));
//   });

/* The second approach by async and await*/

  // function to display coffeecards
  async function displayCoffees(coffees) {
    const container = document.getElementById('coffee-container');
    container.innerHTML = ''; // everytime first clear container
  
    // Iterating over each coffee object and creating card
      coffees.forEach(coffee => {
      const coffeeCard = document.createElement('div');
      coffeeCard.className = 'rounded-lg shadow-2xl p-10 hover:animate-pop';
      coffeeCard.style="background-color: #ffe5d9; color:#6c584c;";
  
      coffeeCard.innerHTML = `
        <img src="${coffee.image}" alt="${coffee.title}" class="w-full h-40 object-cover rounded-lg">
        <h2 class="text-xl font-semibold mt-4">${coffee.title}</h2>
        <p class="text-gray-700 mt-2">${coffee.description}</p>
        <h3 class="font-medium mt-4">Ingredients:</h3>
        <ul class="list-disc list-inside text-gray-600 mt-1">
          ${coffee.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      `;

      // Append coffee card to container
      container.appendChild(coffeeCard);
    });
  }

  async function fetchdata(url){
    try{
      let response=await fetch(url);
      if(!response.ok){
        throw new Error(`The networkError occured ${response.status}`);
      }
      let data= await response.json();
      return data;
    }
    catch(error){
      console.error('ERROR : ', error);
      throw error;
    }
  }

(async()=>{
  try{
  let url='https://api.sampleapis.com/coffee/hot';
  let coffees= await fetchdata(url);
  console.log('coffee data : ',coffees)
  // displayCoffees(coffees);
  if (Array.isArray(coffees)) {
    console.log("coreect")
    displayCoffees(coffees);
} else {
    console.error("Expected an array but got:", coffees);
}
  }
  catch(error){
    console.error("Theirs problem occured : ",error);
  } 
})();