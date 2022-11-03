# Now JavaScript Can
- Change HTML Elements
- Change HTML attributes
- Change CSS Styles
- Add HTML Elements & Attributes
- Remove HTML Elements & Attributes
- React HTML Events

# What is DOM
```
DOM is a Document Object Model & Programming Interface for HTML that 
defines HTML objects, properties, methods & events to get, change, add or delete HTML elements
```

# Form Element Get Values
```
const x = document.forms["frm1"];
let text = "";
for (i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br/>";
}

document.getElementById("demo").innerHTML = text;
```
