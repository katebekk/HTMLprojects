let photo = document.getElementById('photo');
let imag = document.createElement("img");

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
    imag.src = jsonObj['photo_url'][3];
    photo.appendChild(imag);
}