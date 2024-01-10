// SITE
// https://www.weatherapi.com/docs/#
// KEY
// 1c0ef4833f344db39cd210618240201var cityname;


// SEARCH
let todayname=document.getElementById('todayname');
let todaymonth=document.getElementById('todaymonth');
let todaylocation=document.getElementById('todaylocation');
let todaytemp=document.getElementById('todaytemp');
let todayconditionimage=document.getElementById('todayconditionimage');
let todayconditiontext=document.getElementById('todayconditiontext');
let humidity=document.getElementById('humidity');
let wind=document.getElementById('wind');
let winddirection=document.getElementById('winddirection');
let nextdayname=document.getElementsByClassName('nextdayname');
let nextdaymaxtemp=document.getElementsByClassName('nextdaymaxtemp');
let nextdaymintemp=document.getElementsByClassName('nextdaymintemp');
let nextdayconditionimg=document.getElementById('nextdayconditionimg');
let nxtdayconditionsearch=document.getElementsByClassName('nxtdayconditionsearch');
let daytwoconditionimg=document.getElementById('daytwoconditionimg');
let daynumber=document.getElementById('daynumber');
let search=document.getElementById('location');

async function getCurrentWeather(cityname){
    let data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1c0ef4833f344db39cd210618240201&q=${cityname}&days=7`);
    let weatherdata=await data.json();
    return weatherdata;
}
function display(dataofweather){
    let todaydate=new Date();
    todayname.innerHTML=todaydate.toLocaleDateString("en-US",{weekday:"long"})
    daynumber.innerHTML=todaydate.getDate();
    todaymonth.innerHTML=todaydate.toLocaleDateString("en-US",{month:"long"})
    todaylocation.innerHTML=dataofweather.location.name;
    todaytemp.innerHTML=dataofweather.current.temp_c+"C";
   var todayconditionimagee = `http:${dataofweather.current.condition.icon}`;
    todayconditionimage.innerHTML=`<img src="${todayconditionimagee}"> `   ;

    todayconditiontext.innerHTML=dataofweather.current.condition.text;
    humidity.innerHTML=dataofweather.current.humidity+"%";
    wind.innerHTML=dataofweather.current.wind_kph+"km/hr";
    winddirection.innerHTML=dataofweather.current.wind_dir;
}
function displaynxtdays(dataofnxtdays){
    let forecastdata=dataofnxtdays.forecast.forecastday;
    console.log(nextdayname);
    for(i=0;i<2;i++){
        let nxtdate=new Date(forecastdata[i+1].date)
        nextdayname[i].innerHTML=nxtdate.toLocaleDateString("en-US",{weekday:"long"});
        nextdaymaxtemp[i].innerHTML=forecastdata[i+1].day.maxtemp_c;
        nextdaymintemp[i].innerHTML=forecastdata[i+1].day.mintemp_c;
        nxtdayconditionsearch[i].innerHTML=forecastdata[i+1].day.condition.text;
    }
   var nextdayconditionimage=`http:${forecastdata[i+1].day.condition.icon}`;
   nextdayconditionimg.innerHTML=`<img src="${nextdayconditionimage}">`;
   var daytwoconditionimgtwo=`http:${forecastdata[i+2].day.condition.icon}`;
   daytwoconditionimg.innerHTML=`<img src="${daytwoconditionimgtwo}">`;
}
search.addEventListener("input",function(){
    console.log(search.value);
    begin(search.value);
})

async function begin(cityname="cairo"){
   let weather=await getCurrentWeather(cityname);
   if(!weather.error){
     display(weather)
   displaynxtdays(weather)
   }
  
}
begin();
// 1c0ef4833f344db39cd210618240201
// http://api.weatherapi.com/v1/search.xml?key=<YOUR_API_KEY>&q=lond
// var CITYNAME;
// var cityname;
// var citytemp;
// var citycondition;
// var iconUrl;
// var dateee;
// var dayone;
// var daytwo;
// var daythree;
// var dayNames = [];


// async function getCurrentWeather() {
    
//         let data = await fetch("http://api.weatherapi.com/v1/current.json?key=1c0ef4833f344db39cd210618240201&q=London");

//         let res = await data.json();
//         iconUrl = `http:${res.current.condition.icon}`;
//         cityname = res.location.name;
//         citytemp = res.current.temp_c;
//         citycondition = res.current.condition.text;

//         console.log(res.location);
//         console.log(cityname);
//         console.log(citytemp);

//         await getLocalTime();
//         saveDayNames(dateee, 3);

//         for (let i = 0; i < dayNames.length; i++) {
//             displayDayName(i);
            // Optionally, you can add a delay between displaying day names
            // await new Promise(resolve => setTimeout(resolve, 1000));
        

        // display(); // Display other weather information
    
    // getCurrentWeather()

// async function getLocalTime() {
//     let apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=1c0ef4833f344db39cd210618240201&q=07112&days=7";

//     try {
//         let response = await fetch(apiUrl);

//         // if (!response.ok) {
//         //     throw new Error(`HTTP error! Status: ${response.status}`);
//         // }

//         let data = await response.json();
//         let location = data.location;

//         console.log("Local Time:", data);
//         dateee = location.localtime;
//         console.log(dateee);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }


// async function getHTTP(cityname) {
//     try {
//       const response = await fetch(`http://api.weatherapi.com/v1/search.xml?key=1c0ef4833f344db39cd210618240201&q=${cityname}`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const xmlText = await response.text();
//       const parser = new DOMParser();
//       const xmlDoc = parser.parseFromString(xmlText, "application/xml");
      
//       const name = xmlDoc.querySelector("name").textContent;
//       CITYNAME=name;
//       console.log(CITYNAME);
//       console.log(`Name: ${name}`);
  
//       // Do something with the name or call another function
//       // For example, you might want to update the UI with this information
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//     }
//   }
  
//   search.addEventListener("blur",function(e){
//       getHTTP(e.target.value);
  
//   })


// // function getHTTP(cityname) {
// //     let myhttp = new XMLHttpRequest();
// //     myhttp.open("GET", `http://api.weatherapi.com/v1/search.xml?key=1c0ef4833f344db39cd210618240201&q=${cityname}`);
// //     myhttp.send();
// //     myhttp.addEventListener("readystatechange", function () {
// //       if (myhttp.readyState == 4 && myhttp.status == 200) {
// //         data = (JSON.parse(myhttp.response).);
// //         console.log(data);
// //         getCurrentWeather()
// //       }
// //     });
// //   }
// // function search(){
// //     search.addEventListener("blur",function(e){
// //         getHTTP(e.target.value);
    
// //     })
// // }

// function saveDayNames(initialDate, numberOfDays) {
//     for (let i = 0; i < numberOfDays; i++) {
//         const currentDate = new Date(initialDate);
//         currentDate.setDate(currentDate.getDate() + i);
//         const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
//         dayNames.push(dayName);
//     }
// }

// function displayDayName(index) {
//     const currentDayName = dayNames[index];
//     dayone=dayNames[0];
//     daytwo=dayNames[1];
//     daythree=dayNames[2];
//     console.log(dayone);
// }

// function display() {
//     let cartoona = `<h2>${cityname}</h2>
//                     <div class="d-flex justify-content-between">
//                         <h3>${citytemp}C</h3>
//                         <img src="${iconUrl}" alt="${citycondition}"> 
//                     </div>
//                     <h4>${citycondition}</h4>`;

//     document.getElementById('infoo').innerHTML = cartoona;
// }

// Call the function
// getCurrentWeather();


// var cityname;
// var citytemp;
// var citycondition;
// var iconUrl;
// var dateee;
// var dayNames = [];

// async function getCurrentWeather() {
//     try {
//         let data = await fetch("http://api.weatherapi.com/v1/current.json?key=1c0ef4833f344db39cd210618240201&q=London");

//         let res = await data.json();
// 1c0ef4833f344db39cd210618240201
// key to get 7 days
// JSON: http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7
