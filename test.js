const button = document.getElementById("test-promise");

const promise = new Promise((resolve, reject) => {
  button.addEventListener("click", (e) => {
    resolve("Promise is Resolved");
  });
});

promise.then((msg) => console.log(msg)).catch((err) => console.error(err));
