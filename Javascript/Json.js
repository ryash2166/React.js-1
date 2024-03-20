
let Json = [
    {"Id" : "1" , "type" : "food" , "name" : "Dal-Makhani" , "price" : "800/-"},
    {"Id" : "2" , "type" : "car" , "name" : "Shelby" , "price" : "230800/-"},
    {"Id" : "3" , "type" : "bike" , "name" : "Ninja" , "price" : "13800/-"},
    {"Id" : "4" , "type" : "tour" , "name" : "Varanasi" , "price" : "24000/-"},
    {"Id" : "5" , "type" : "temple" , "name" : "Prem Mandir" , "timing" : "4 to 8"},
    {"Id" : "6" , "type" : "trek" , "name" : "Spiti Valley" , "price" : "23800/-"},
    {"Id" : "7" , "type" : "tool" , "name" : "Hammer" , "price" : "200/-"},
    {"Id" : "8" , "type" : "fruit" , "name" : "Kiwi" , "price" : "800/-"},
    {"Id" : "9" , "type" : "movie" , "name" : "Ford vs. Ferrari" , "price" : "23000/-"},
    {"Id" : "10" , "type" : "book" , "name" : "Dune" , "part" : "8 part"},
    {"Id" : "11" , "type" : "ott" , "name" : "Netflix" , "subscription" : "2499/-"},
    {"Id" : "12" , "type" : "sport" , "name" : "Cricket" , "league" : "IPL"}
]

fetch('http://localhost:3000/food').then(Response => Response.json()).then(json => console.log(json))   

// let html = document.getElementById('json')

// html.innerHTML = JSON.stringify(Json , null , 2)



fetch("http://localhost:3000/bike")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("json").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });