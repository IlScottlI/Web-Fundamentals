//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a() {
  return 35;
}
console.log(a());
Response = `35`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a() {
  return 4;
}
console.log(a() + a());
Response = `8`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b) {
  return b;
}
console.log(a(2) + a(4));
Response = `6`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b) {
  console.log(b);
  return b * 3;
}
console.log(a(3));
Response = `3`;
Response += `9`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b) {
  return b * 4;
  console.log(b);
}
console.log(a(10));
Response = `40`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b) {
  if (b < 10) {
    return 2;
  } else {
    return 4;
  }
  console.log(b);
}
console.log(a(15));
Response = `4`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b, c) {
  return b * c;
}
console.log(10, 3);
console.log(a(3, 10));
Response = ``;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b) {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  return i;
}
console.log(3);
console.log(4);
Response = `10 3`;
Response += `30`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b) {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  return i;
}
console.log(3);
console.log(4);
Response = `3`;
Response += `4`;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a(b, c) {
  for (var i = b; i < c; i++) {
    console.log(i);
  }
  return b * c;
}
a(0, 10);
console.log(a(0, 10));
Response = ``;
Response = `1`;
Response = `2`;
Response = `3`;
Response = `4`;
Response = `5`;
Response = `6`;
Response = ` 7`;
Response = ` 8`;
Response = ` 9`;
Response = ` 0`;
Response = ` 1`;
Response = ` 2`;
Response = ` 3`;
Response = ` 4`;
Response = ` 5`;
Response = ` 6`;
Response = ` 7`;
Response = ` 8`;
Response = ` 9`;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      console.log(j);
    }
    console.log(i);
  }
}
Response = ``;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function a() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      console.log(i, j);
    }
    console.log(j, i);
  }
}
var z = 10;
function a() {
  var z = 15;
  console.log(z);
}
console.log(z);
Response = ``;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
var z = 10;
function a() {
  var z = 15;
  console.log(z);
}
a();
console.log(z);
Response = ``;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
var z = 10;
function a() {
  var z = 15;
  console.log(z);
  return z;
}
z = a();
console.log(z);
Response = ``;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
