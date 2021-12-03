// index.js
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
// console.log('It worked! Returned IP:' , ip);
// fetchCoordsByIP(ip, (error, coordinates) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(coordinates);
//   }
// });
// });

// fetchCoordsByIP(ip, (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates);
//   fetchISSFlyOverTimes(coordinates, callback);
// });

// fetchISSFlyOverTimes(myCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log("It worked! Returned flyover times:", passTimes);
// });

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration}`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
