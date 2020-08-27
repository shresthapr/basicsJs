function startScript() {
	console.log("Hello World");
	document.body.style.backgroundImage = 'url("img/bg.jpg")';

	var anything = document.createElement("div");
	anything.id = "title-wrapper";
	anything.innerText = "See how it works";
	document.body.appendChild(anything);

	document.getElementById("title-wrapper").style.margin = 50;
	document.getElementById("title-wrapper").style.width = 100;
	document.getElementById("title-wrapper").style.textAlign = "center";
	document.getElementById("title-wrapper").style.fontFamily = "impact";
	document.getElementById("title-wrapper").style.position = "absolute";
	document.getElementById("title-wrapper").style.textTransform = "uppercase";

	var aitle = document.createElement("h1");
	aitle.id = "title";
	aitle.innerText = "Work under progress...";
	document.getElementById("title-wrapper").appendChild(aitle);
	aitle.style.cssText =
		"width:fit-content; margin: auto; background:black; color:white";
}

document.addEventListener("DOMContentLoaded", startScript);

// var h1 = document.createElement("h1");
// h1.id = "title";
// h1.innerHTML = "Work under progress...";

// document.getElementsByName("h1").style =
// 	"width:fit-content; margin: auto; background:black; color:white";

// document.div.appendChild("h1");
