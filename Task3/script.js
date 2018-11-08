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










