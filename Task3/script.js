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

//DISPLAY DATA AS A LIST ON HTML PAGE

const data = ["name11", "name2", "name3", "name4", "name5", "name6"];
const numbers = ["12354", "7393", "537", "4278", "2763", "42753"];

function showArray(input) {
  var list = document.createElement("ul");
  list.id = "holder";
  input.forEach(function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    list.appendChild(li);
  });
  document.body.appendChild(list);
}

function showObject(input) {
  var list = document.createElement("ul");
  list.id = "holder";
  input
    .map(a => a.deviceId)
    .forEach(function(item) {
      var li = document.createElement("li");
      var text = document.createTextNode(item);
      li.appendChild(text);
      list.appendChild(li);
    });
  document.body.appendChild(list);
}

showArray(data);
showArray(numbers);









