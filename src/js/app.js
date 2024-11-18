
/*the first approach by promise*/
let url='https://api.sampleapis.com/coffee/hot';
// DOMContentLoaded: to load the html content first 
document.addEventListener('DOMContentLoaded', () => {
    // Fetching data from the URL
    fetch(url) 
      .then(response =>
        {
          if(!response.ok){
            throw new Error("The network error occured" , response.status);
          }
          return response.json();
        }
      )
      .then(data => displayCoffees(data))  //console.log('coffee data: ',data) )
      .catch(error => console.error('Error fetching data:', error));
  });

  // function to display coffeecards
  async function displayCoffees(coffees) {
    const container = document.getElementById('coffee-container');
    container.innerHTML = ''; // everytime first clear container
  
    // Iterating over each coffee object and creating card
      coffees.forEach(coffee => {
      const coffeeCard = document.createElement('div');
      coffeeCard.className = 'flex flex-col gap-6 rounded-2xl shadow-2xl p-10 hover:animate-pop';
      coffeeCard.style="color:#6c584c;";
  
      coffeeCard.innerHTML = `
        <img src="${coffee.image}" alt="${coffee.title}" class="w-full h-80 object-cover rounded-2xl">
        <div class= 'flex flex-col gap-2'>
        <h2 class="text-xl font-semibold mt-4">${coffee.title}</h2>
        <p class="text-gray-700 mt-2">${coffee.description}</p>
        <h3 class="font-medium mt-4">Ingredients:</h3>
        <ul class="list-disc list-inside text-gray-600 mt-1">
          ${coffee.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        </div>
      `;
      container.appendChild(coffeeCard);
    });
  }

  // /* The second approach by async and await*/
  // async function fetchdata(url){
  //   try{
  //     let response=await fetch(url);
  //     if(!response.ok){
  //       throw new Error(`The networkError occured ${response.status}`);
  //     }
  //     let data= await response.json();
  //     return data;
  //   }
  //   catch(error){
  //     console.error('ERROR : ', error);
  //     throw error;
  //   }
  // }

// (async()=>{
//   try{
//   let coffees= await fetchdata(url);
//   console.log('coffee data : ',coffees)
//   displayCoffees(coffees);
//   }
//   catch(error){
//     console.error("Theirs problem occured : ",error);
//   } 
// })();

