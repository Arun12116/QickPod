// import React, { useEffect, useState } from 'react';
// import axios from 'axios';  

// const API_KEY = '59871c751645408db4c33403230808' // Replace with your actual API key

// const Card = () => {
//   const [forecastData, setForecastData] = useState([]);
//   const [currentDayIndex, setCurrentDayIndex] = useState(0);
//   console.log(currentDayIndex);

//   useEffect(() => {
//     axios
//       .get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=delhi&days=5`)
//       .then(response => {
//         setForecastData(response.data.forecast.forecastday);
//       })
//       .catch(error => {
//         console.error('Error fetching forecast data:', error);
//       });
//   }, []);

//   const handlePrevDay = () => {
//     if (currentDayIndex > 0) {
//       setCurrentDayIndex(currentDayIndex - 1);
//     }
//   };

//   const handleNextDay = () => {
//     if (currentDayIndex < forecastData.length - 1) {
//       setCurrentDayIndex(currentDayIndex + 1);
//     }
//   };

//   const selectedDay = forecastData[currentDayIndex];

//   return (
//     <div>
//       <h2>5-Day Weather Forecast</h2>
//       <div>
//         <button onClick={handlePrevDay}>Previous Day</button>
//         <button onClick={handleNextDay}>Next Day</button>
//       </div>
//       {forecastData.length > 0 && (
//         <div>
//           <h3>{selectedDay.date}</h3>
//           <img src={selectedDay.day.condition.icon} alt="Weather Icon" />
//           <p>Max Temperature: {selectedDay.day.maxtemp_c}°C</p>
//           <p>Min Temperature: {selectedDay.day.mintemp_c}°C</p>
//           <p>Condition: {selectedDay.day.condition.text}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;
