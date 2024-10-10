const intro = {
  name: "Amitabh",
  city: "Pune",
  print: function (role, company) {
    console.log(
      `Hello ${this.name} is a ${role} working at ${company} lives in ${this.city}`
    );
  },
};
// We can use CALL, APPLY, and BIND to explicitly set the value of 'this' in the method,
// allowing us to control which object 'this' refers to.

const person1 = {
  name: "Rajendra",
  city: "Sikar",
};

const person2 = {
  name: "Prakash",
  city: "Mumbai",
};

const person3 = {
  name: "Vikash",
  city: "mathura",
};

// CALL
intro.print.call(person1, "Frontend Developer", "Meta");

// APPLY
intro.print.apply(person2, ["Qlik Developer", "Google"]);

//BIND

const bindedintro = intro.print.bind(person3, "Data Engineer", "Groww");
bindedintro();
