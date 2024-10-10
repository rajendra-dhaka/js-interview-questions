// function curriedMultiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
// console.log(curriedMultiply(2)(3)(4)); // Output: 24

const curriedMultiply = (a) => (b) => (c) => a * b * c;

console.log(curriedMultiply(2)(3)(4)); // Output: 24

// REAL LIFE EXAMPLE
const fetchData = (url) => (token) => (endpoint) =>
  fetch(`${url}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

// Now create a base API function
const fetchFromAPI = fetchData("https://api.example.com")("myAuthToken");

// Reuse the base API function for specific endpoints
fetchFromAPI("users").then((data) => console.log(data));
fetchFromAPI("posts").then((data) => console.log(data));
