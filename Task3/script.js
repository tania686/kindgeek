// LOCAL STORAGE FUNCTIONS

function add(key, value) {
  if (!key || !value) {
    return;
  }
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

function get(key) {
  var value = localStorage.getItem(key);
  if (!value) {
    return;
  }
  if (value[0] === "{") {
    value = JSON.parse(value);
  }
  return value;
}

// ADDING EVENTS FOR BUTTONS

var btn1 = document.getElementById("first-btn");
var btn2 = document.getElementById("second-btn");

btn1.addEventListener("click", function() {
  return add("test", DATA);
});

btn2.addEventListener("click", function() {
  console.log(get("test"));
});









