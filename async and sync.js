function findsum(n) {
  let a = 1;
  for (let i = 0; i < n; i++) {
    a = a + i;
  }
  return a;
}

function sync() {
  console.log(findsum(100));
}
setTimeout(sync, 1000);
console.log("mani");
