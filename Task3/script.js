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

//const DATA = ["name11", "name2", "name3", "name4", "name5", "name6"];

var btn1 = document.getElementById("first-btn");


btn1.addEventListener("click", function() {
  return add("test", DATA);
});


//add to LS button
const add_btn = document.getElementById("btn-addLS");

const data = document.getElementById("input-data");

add_btn.addEventListener("click", function () {
  var value = data.value;
  add("inputValue", value);  
  location.reload();
});

//show from LS button

var show_btn = document.getElementById("second-btn");

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

function showArray(input) {
  var list = document.createElement("ul");
  list.id = "list-holder";
  input.forEach(function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    list.appendChild(li);
  });
  document.body.appendChild(list);
}

show_btn.addEventListener("click", function() {
  const value = get("inputValue");
  console.log(value);
  var list = document.getElementById("list-holder");
  var li = document.createElement("li");
  var text = document.createTextNode(value);
  li.appendChild(text);
  list.appendChild(li);
});

//DISPLAY DATA AS A LIST ON HTML PAGE

const names = ["name1", "name2", "name3", "name4", "name5", "name6"];
const numbers = ["12354", "7393", "537", "4278", "2763", "42753"];

function showArray(input) {
  var list = document.createElement("ul");
  list.id = "list-holder";
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

showArray(names);

//add an input value to the list




//TOGLE CLASS "crossed" ON THE <li> ELEMENTS

function li_crossed () {
  var list_items = document.getElementsByTagName("li");

  for (var i = 0; i < list_items.length; i++) {
    var item = list_items[i];
    item.addEventListener("click", function(e) {
      if (e.target && e.target.matches("li")) {
        e.target.classList.toggle("crossed");
        }
    });
  }
}

li_crossed();














