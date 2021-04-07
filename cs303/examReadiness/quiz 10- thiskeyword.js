//uncomment it to see different solutions
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(function (student) {
      console.log(this.title + ": " + student);
    });
  },
};
group.showList();
//

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    let f = function (student) {
      console.log(this.title + ": " + student);
    };
    //1. forEach expect a function as the parameter
    //2. f.call(this, student) - the returned result of function f is the value for forEach parameter - undefined
    //3. you need to wrap f.call(this, student) in to a function.
    this.students.forEach((student) => f.call(this, student));
    this.students.forEach((student) => f.apply(this, [student]));
  },
};

group.showList();

//using self insteady of this

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    // console.log(this); //this = group
    const self = this;

    this.students.forEach(function (student) {
      console.log(self.title + ": " + student);
    });
  },
};

group.showList();

//using arrow function

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    // console.log(this); //this = group

    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
  },
};
group.showList();

//using bind

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    console.log(this); //this = group
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};

group.showList();
