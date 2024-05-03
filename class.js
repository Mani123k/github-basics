class mani {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    console.log(this.age);
  }
}
let a = new mani("kumar", 23, "guntur");
a.speak();
