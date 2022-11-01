// document.getElementById("demo").innerHTML = "Hello DOM";
// console.dir(document.getElementById("demo"));

const x = document.forms["frm1"];
let text = "";
for (i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br/>";
}

document.getElementById("demo").innerHTML = text;
