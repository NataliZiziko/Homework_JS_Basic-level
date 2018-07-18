var EmptyObject = {};

function isEmpty(obj) {
  for (var key in obj) {
     return false;
  }
     return true;
}
alert(isEmpty(EmptyObject));

EmptyObject.age = 30;

alert(isEmpty(EmptyObject));