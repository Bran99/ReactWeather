function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof(a) !== "number" || typeof(b) !== "number") {
      reject("not both numbers ya idiot")
    } else {
      resolve(a + b);
    }
  })
}

addPromise(2, 4).then(function (result) {
  console.log("success!", result);
}, function (err) {
  console.log("error", err);
});
addPromise("stuff", 6).then(function (result) {
  console.log("success!", result);
}, function (err) {
  console.log("error", err);
});
addPromise(2, "stuff").then(function (result) {
  console.log("success!", result);
}, function (err) {
  console.log("error", err);
});
