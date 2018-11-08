// const DATA = [
//   {
//     value: 15
//   },
//   {
//     value: 16
//   },
//   {
//     value: 17,
//     children: [
//       {
//         value: 18,
//         children: [
//           {
//             value: 19
//           },
//           {
//             value: 20
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: 21
//   },
//   {
//     value: 22
//   },
//   {
//     value: 23
//   },
//   {
//     value: 24,
//     children: [
//       {
//         value: 25
//       },
//       {
//         value: 26
//       },
//       {
//         value: 27
//       }
//     ]
//   }
// ];

// function add(key, value) {
//   if (!key || !value) {
//     return;
//   }
//   if (typeof value === "object") {
//     value = JSON.stringify(value);
//   }
//   localStorage.setItem(key, value);
// }

// function get(key) {
//   var value = localStorage.getItem(key);
//   if (!value) {
//     return;
//   }
//   if (value[0] === "{") {
//     value = JSON.parse(value);
//   }
//   return value;
// }

// var btn1 = document.getElementById("first-btn");
// var btn2 = document.getElementById("second-btn");

// btn1.addEventListener("click", function() {
//   return add("test", DATA);
// });

// btn2.addEventListener("click", function() {
//   console.log(get("test"));
// });

// const data = ["name1", "name2", "name3", "name4", "name5", "name6"];

// function showArr(arr) {
//   listItems = arr.reduce((result, item) => {
//     result += `<li>${item}</li>`;
//     return result;
//   }, "");

//   resultElement = document.getElementById("result");

//   resultElement.innerHTML = listItems;
// }

// //showArr(data);




// // function showObj(arr) {
// //     listItems = arr.reduce((result, item) => {
// //       result += `<li>${item.state}</li>`;
// //       return result;
// //     }, "");
  
// //     resultElement = document.getElementById("result");
  
// //     resultElement.innerHTML = listItems;
// //   }
  
// //   showArr(INPUT);

//   /*function showData(array) {
//     for (i = 0; i < array.length; i++) {
//         var li = document.createElement("li");
//         var text = document.createTextNode(array[i]);
//         li.appendChild(text);
//         document.getElementById("myUl").appendChild(li);
//       }
//   }

//   showData(data);*/


// // var slides = ["name1", "name2", "name3", "name4", "name5", "name6"]

// // function show (arr) {
// //     var str = '<ul>'

// //     arr.forEach(function(item) {
// //       str += '<li>'+ item + '</li>';
// //     }); 
    
// //     str += '</ul>';
// //     document.getElementById("slideContainer").innerHTML = str;
// // }

// // show(slides);


// const INPUT = [  
//     {  
//         "@id":1,
//         "deviceId":1,
//         "typeOfDevice":"1",
//         "state":"1",
//         "assigned":true
//     },
//     {  
//         "@id":2,
//         "deviceId":3,
//         "typeOfDevice":"3",
//         "state":"Excelent",
//         "assigned":true
//     },
//     {  
//         "@id":3,
//         "deviceId":4,
//         "typeOfDevice":"jÃºuna",
//         "state":"Excelent",
//         "assigned":true
//     },
//     {  
//         "@id":4,
//         "deviceId":5,
//         "typeOfDevice":"nffjnff",
//         "state":"Regular",
//         "assigned":true
//     },
//     {  
//         "@id":5,
//         "deviceId":6,
//         "typeOfDevice":"44",
//         "state":"Excelent",
//         "assigned":true
//     }
// ]

// function showObj (arr) {
//     var str = '<ul>'

//     arr.map(a => a.deviceId).forEach(function(item) {
//       str += '<li>'+ item + '</li>';
//     }); 
    
//     str += '</ul>';
//     document.getElementById("objContainer").innerHTML = str;
// }

// showObj(INPUT);


var array = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"]


function showArray (input) {
    var list = document.createElement("ul");
    input.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        list.appendChild(li);
      });
    document.body.appendChild(list);
}

showArray(array);

/*function showObject (input) {
    
    input.map(a => a.deviceId).forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("myUl1").appendChild(li);
      });
}



showObject(INPUT);*/