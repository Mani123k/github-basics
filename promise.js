//pending,resolving,rejected

const { resolve } = require("path");

/*var a = new Promise(function a(res) {
  res();
});

function callback() {
  console.log(a);
}
a.then(callback);*/
const register = () => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("please register");
      resolve("successfull registered");
    }, 3000);
  });
};
const login = () => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("please login");
      resolve();
    }, 3000);
  });
};
register().then(login);
