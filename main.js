const body=document.querySelector(".body")
const input=document.getElementById("#input")
const searchbtn=document.getElementById("Btn")
const containerrow=document.querySelector(".row")
const search=document.querySelector("#search")
const formselect=document.querySelector(".form-select")
const container1=document.querySelector(".container1")
const darkmodebtn=document.querySelector("#darkmodeBtn")
const btnmode=document.querySelector(".btn-mode")
const regions = document.querySelectorAll('#regions');



async function getdata(){

  const URL = await fetch('https://restcountries.com/v2/all');
  const res = await URL.json();
  console.log(res);
  res.forEach(api => {
      showcontentdata(api);
  });
}

getdata();

function showcontentdata(arr){
    const containerfluid=document.createElement("div")
    containerfluid.className="col";
    containerfluid.setAttribute("style","width:100%;padding-top:20px")
    
    // containerfluid.setAttribute("style","height:100%")
    containerfluid.innerHTML=`
    <div class="card text-white" style="width: 20rem;height:100%;background-color:#161B21;">
    <img src="${arr.flags.svg}"  class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="countryName text-primary" >${arr.name}</h4><br>
      <p> <strong>capital: </strong>${arr.capital}</p>
      <p> <strong>Population: </strong>${arr.population}</p>
      <p class="regionName" > <strong>region: </strong>${arr.region}</p>
      <p> <strong>subregion: </strong>${arr.subregion}</p>
      <p> <strong>Independent: </strong>${arr.independent}</p>
    </div> 
  </div>
`
containerrow.appendChild(containerfluid)
// containerrow.innerHTML = "";

}



function switchMode() {
  let moon = document.getElementById ("moon");
  if(moon.className=="moon"){
  moon.className="sun";
  document.body.style.backgroundColor = "black";
  document.body.style.color = "#fff";
  }
  else {
  moon.className ="moon";
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
  }
  }


  const countryName = document.getElementsByClassName('countryName')
  search.addEventListener('input', () => {
 Array.from(countryName).forEach(country => {
     if(country.innerText.toLowerCase().includes(search.value.toLowerCase())){
         country.parentElement.parentElement.style.display =  "flex";
 
     } else {
         country.parentElement.parentElement.style.display = "none";
     }
 })
  })
 
  const regionName = document.getElementsByClassName('regionName');
  regions.forEach(region => {
     region.addEventListener('click', e => {
         console.log("hi")
         Array.from(regionName).forEach(element => {
             if(element.innerText.includes(region.innerText) || region.innerText === "All") {
                 element.parentElement.parentElement.style.display = "flex";
             } else {
                 element.parentElement.parentElement.style.display = "none";
 
             }
             console.log("done");
         })
     })
  })
 
 
 
 
     
 
 

 
//     res.forEach(element => {
       
//         showcontentdata(element)
        
//     });
//   }
//   searchEvent();

// })


// option1.addEventListener("click", ()=>{
//   console.log("hlo");
//   async function OptionEventOne(){
    
//     const url=await fetch(`https://restcountries.com/v3.1/region/asia`)
//     const res=await url.json();
//     console.log(res);
//     res.forEach(element => {
//         showcontentdata(element);
//         console.log(option1);
//     });
//   }
//   OptionEventOne();
  

// })
// option2.addEventListener("click", ()=>{
//   async function OptionEventTwo(){
    
//     const url=await fetch('https://restcountries.com/v3.1/region/americas?fullText=true')
//     const res=await url.json();
//     console.log(res);
//     res.forEach(element => {
//         showcontentdata(element);
//     });
//   }
//   OptionEventTwo();

// })
// option3.addEventListener("click", ()=>{
//   console.log(option3);
//   async function OptionEventThree(){
    
//     const url=await fetch('https://restcountries.com/v3.1/region/africa?fullText=true')
//     const res=await url.json();
//     console.log(res);
//     res.forEach(element => {
//         showcontentdata(element);
//     });
//   }
//   OptionEventThree();

// })
// option4.addEventListener("click", ()=>{
//   async function OptionEventFour(){
    
//     const url=await fetch('https://restcountries.com/v3.1/region/europe?fullText=true')
//     const res=await url.json();
//     console.log(res);
//     res.forEach(element => {
//         showcontentdata(element);
//     });
//   }
//   OptionEventFour();

// })
// option5.addEventListener("click", ()=>{
//   async function OptionEventFive(){
    
//     const url=await fetch('https://restcountries.com/v3.1/region/oceania?fullText=true')
//     const res=await url.json();
//     console.log(res);
//     res.forEach(element => {
//         showcontentdata(element);
//     });
//   }
//   OptionEventFive();

// })

// const dropDown = document.querySelector('.dropdownMenu');
// const dropOptions = document.querySelector('.drop-options');
// const icon = document.querySelector('.bx');
// const countries = document.querySelector('.countries');
// const search = document.querySelector('.search')
// const regions = document.querySelectorAll('.regions');






// dropDown.addEventListener('click', e => {
//     dropOptions.classList.toggle ('show-options')


// })

// async function getcountries(){

//     const URL = await fetch('https://restcountries.com/v2/all');
//     const res = await URL.json();
//     console.log(res);
//     res.forEach(api => {
//         showCountry(api);
//     });
// }

//  getcountries();

//  function showCountry(data) {
//     const country = document.createElement('div')
//     country.classList.add('country');
//     country.innerHTML =  
//     `<div class="country-img">
//       <img src=${data.flag} alt="">
//     </div>
// <div class="country-details">
//     <h5 class="countryName">${data.name}</h5>
//     <p><strong>population</strong> &nbsp ${data.population}</p>
//     <p class="regionName"><strong>Region</strong> &nbsp &nbsp &nbsp &nbsp ${data.region}</p>
//     <p><strong>Capital</strong> &nbsp &nbsp &nbsp &nbsp ${data.capital}</p>

    
// </div> `

// countries.appendChild(country);
//  }

//  const countryName = document.getElementsByClassName('countryName')
//  search.addEventListener('input', e => {
// Array.from(countryName).forEach(country => {
//     if(country.innerText.toLowerCase().includes(search.value.toLowerCase())){
//         country.parentElement.parentElement.style.display =  "grid";

//     } else {
//         country.parentElement.parentElement.style.display = "none";
//     }
// })
//  })

//  const regionName = document.getElementsByClassName('regionName');
//  regions.forEach(region => {
//     region.addEventListener('click', e => {
//         console.log("hi")
//         Array.from(regionName).forEach(element => {
//             if(element.innerText.includes(region.innerText) || region.innerText === "All") {
//                 element.parentElement.parentElement.style.display = "grid";
//             } else {
//                 element.parentElement.parentElement.style.display = "none";

//             }
//             console.log("done");
//         })
//     })
//  })



    


