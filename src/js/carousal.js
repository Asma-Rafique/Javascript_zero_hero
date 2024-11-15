reviewsData=
[
{
    rating:"./src/assets/Frame 15.svg",
    remark:"Boosted My Business through Vlace",
    review:  "Let me tell you about my experience with Vlace. This platform has been a total game-changer for my farm. Gone are the days of struggling to find buyers for my animals. With Vlace, it's like having a virtual farmer's market at my fingertips! I simply snap a pic, upload it, and voila! Orders start pouring in. Thanks to Vlace, my farm is thriving like never before",
    user:"./src/assets/Ellipse 2.svg"
},
{
    rating:"./src/assets/Frame 15.svg",
    remark:"My Business through Vlace",
    review:  "Let me tell you about my experience with Vlace. This platform has been a total game-changer for my farm. Gone are the days of struggling to find buyers for my animals. With Vlace, it's like having a virtual farmer's market at my fingertips! I simply snap a pic, upload it, and voila! Orders start pouring in. Thanks to Vlace, my farm is thriving like never before",
    user:"./src/assets/Ellipse 2.svg"
},
{
    rating:"./src/assets/Frame 15.svg",
    remark:"Business through Vlace",
    review:  "Let me tell you about my experience with Vlace. This platform has been a total game-changer for my farm. Gone are the days of struggling to find buyers for my animals. With Vlace, it's like having a virtual farmer's market at my fingertips! I simply snap a pic, upload it, and voila! Orders start pouring in. Thanks to Vlace, my farm is thriving like never before",
    user:"./src/assets/Ellipse 2.svg"
},
{
    rating:"./src/assets/Frame 15.svg",
    remark:"Through Vlace",
    review:  "Let me tell you about my experience with Vlace. This platform has been a total game-changer for my farm. Gone are the days of struggling to find buyers for my animals. With Vlace, it's like having a virtual farmer's market at my fingertips! I simply snap a pic, upload it, and voila! Orders start pouring in. Thanks to Vlace, my farm is thriving like never before",
    user:"./src/assets/Ellipse 2.svg"
}
];

const carousal=document.getElementById('carousal');
const preBtn=document.getElementById('prebtn');
const nextBtn=document.getElementById('nextbtn');
let currentindex=0;


function customerReview(data){
    
    data.forEach((feedback, index)=>{
        let reviewCard=document.createElement('div');
        reviewCard.classList='review rounded-lg shadow-2xl p-10 ';
        reviewCard.setAttribute('data-index',index)
        reviewCard.innerHTML= `
        <img src="${feedback.rating}" alt="Rating" class="object-cover rounded-lg">
        <h2 class="text-xl font-semibold mt-4">${feedback.remark}</h2>
        <p class="text-gray-700 mt-2">${feedback.review}</p>
        <img src="${feedback.user}" alt="Profile" class="object-cover rounded-lg">
        `;
        carousal.appendChild(reviewCard);
    }); 
}
function showreview(index){
    // const reviews=document.querySelectorAll('.review');
    // console.log(reviews);
    // reviews.forEach((item,i)=>{
    //     item.classList.remove('opacity-1');
    //     if(i===index){
            const offset = -index * 100; // Calculate the offset based on the index
            carousal.style.transform = `translateX(${offset}%)`;
//             item.classList.add('opacity-1');
//             item.classList.remove('opacity-0')
//         }
//     }
// );
}
function slideCarousal(){
    customerReview(reviewsData);
    showreview(currentindex);
    preBtn.addEventListener('click',()=>{
        currentindex=(currentindex>0)?(currentindex-1):reviewsData.length-1;
        showreview(currentindex);
    });
    nextBtn.addEventListener('click',()=>{
        currentindex=(currentindex < reviewsData.length-1)? (currentindex +1): 0;
        showreview(currentindex);
    });
}

slideCarousal();

// const carousal = document.getElementById("carousal");
// const preBtn = document.getElementById("prebtn");
// const nextBtn = document.getElementById("nextbtn");
// let currentindex = 0;

// function customerReview(data) {
//   data.forEach((feedback, index) => {
//     let reviewCard = document.createElement("div");
//     reviewCard.classList = "review rounded-lg shadow-2xl p-10";
//     reviewCard.setAttribute("data-index", index);
//     reviewCard.innerHTML = `
//       <img src="${feedback.rating}" alt="Rating" class="object-cover rounded-lg">
//       <h2 class="text-xl font-semibold mt-4">${feedback.remark}</h2>
//       <p class="text-gray-700 mt-2">${feedback.review}</p>
//       <img src="${feedback.user}" alt="Profile" class="object-cover rounded-lg">
//     `;
//     carousal.appendChild(reviewCard);
//   });
// }

// function showreview(index) {
//   const offset = -index * 100; // Calculate the offset based on the index
//   carousal.style.transform = `translateX(${offset}%)`;
// }

// function slideCarousal() {
//   customerReview(reviewsData);
//   showreview(currentindex);
//   preBtn.addEventListener("click", () => {
//     currentindex = currentindex > 0 ? currentindex - 1 : reviewsData.length - 1;
//     showreview(currentindex);
//   });
//   nextBtn.addEventListener("click", () => {
//     currentindex = currentindex < reviewsData.length - 1 ? currentindex + 1 : 0;
//     showreview(currentindex);
//   });
// }

// slideCarousal();

