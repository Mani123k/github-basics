/*function getlen(a) {
    console.log("original length", a);
    console.log("stringlength", a.length);
}
getlen("mani");
let a = "manikumar";
console.log(a.slice(3, 7));*/
/*function fn1() {
  console.log("manikumar");
}

function mani(fn2) {
  fn2();
}
mani(fn1);*/
//const a = [1, 2, 3]
//finction mani(str) {
//   console.log(str)
//map,filter,find ,sort
const a = {
  name: "manikumar",
  age: 25,
  address: "hyd",
};
const b = {
  name: "kumar",
  age: 25,
  address: "guntur",
};

function printstr(m) {
  console.log("name" + " " + m["name"] + " " + m["age"]);
}
console.log(printstr(a));
