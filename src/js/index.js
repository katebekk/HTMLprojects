let photo = document.getElementById('photo');
let imag = document.createElement("img");
let im = document.createElement("a");
let buttonRight = document.getElementById("buttonRight");
let buttonLeft = document.getElementById("buttonLeft");
let max = 0;
let currPhoto =3;

var requestURL = 'http://167.172.230.202/JSONs/images.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let jsonO = request.response;
    showImage(jsonO);
    max = jsonO['number'];
    buttonRight.onclick = function () {
        if(currPhoto < max-1){
            currPhoto++;
        }else currPhoto = 0;
        photo.removeChild(imag);
        showImage(jsonO);
    }
    buttonLeft.onclick = function () {
        if(currPhoto > 0){
            currPhoto--;
        }else currPhoto = max-1;
        photo.removeChild(imag);
        showImage(jsonO);
    }


}
function showImage(jsonObj) {
    imag.src = jsonObj['photo_url'][currPhoto];
    photo.appendChild(imag);
}
