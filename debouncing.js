// Debouncing - technique used to limit the rate at which a function is executed

// Debounce function
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // Clear the previous timeout if there is one
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Function to be debounced
function fetchResults(query) {
  console.log(`Fetching results for: ${query}`);
  // Simulate an API call
}

// Create a debounced version of fetchResults
const debouncedFetchResults = debounce(fetchResults, 300);

// Event listener for search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (event) => {
  debouncedFetchResults(event.target.value);
});
