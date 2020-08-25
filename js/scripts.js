function startScript () {
    console.log("Hello World")
    document.body.style.backgroundImage = 'url("img/bg.jpg")';
};
document.addEventListener('DOMContentLoaded',startScript);


var div = document.createElement('div');

div.id = 'title-wrapper';
div.innerHTML = '<p>Check if it appears</p>';
var div = document.getElementsByTagName('body');
document.body.appendChild('div');

document.getElementById('title-wrapper').style.margin= 50;
document.getElementById('title-wrapper').style.width= 100;
document.getElementById('title-wrapper').style.textAlign= "center";
document.getElementById('title-wrapper').style.fontFamily = "impact";
document.getElementById('title-wrapper').style.position = "absolute";
document.getElementById('title-wrapper').style.textTransform = "uppercase";

var h1 = document.createElement("h1");
h1.id= "title";
h1.innerHTML = "Work under progress...";

document.getElementsByName('h1').style = "width:fit-content; margin: auto; background:black; color:white";

document.div.appendChild("h1");

