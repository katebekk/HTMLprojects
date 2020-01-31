/*let photo = document.getElementById("photo");
let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("buttonRight");
let img = document.createElement("img");



img.src = "./img/dr1";
photo.appendChild(img);
console.log("hello");*/
/*
var requestURL = 'http://167.172.230.202/JSONs/images.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let jsonO = request.response;
    showImage(jsonO);
}
function showImage(jsonObj) {
    img.src = jsonObj['photo_url'][0];
    photo.appendChild(img);
}
*/

let doc = document.getElementById("photo");
let img = document.createElement("img");
img.src = "./../img/dr1";
doc.appendChild(img);