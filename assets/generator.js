
var Sandwich = "basic"

function generate(){
  //var bread = seperateByKomma(breads);
  Sandwich = get(breads)
  + " filled with"
  + get(vegs) + ","
  + get(cheese) + " and"
  + get(sauces);

  document.getElementById("out").innerHTML = Sandwich;
}

function get(elements) {
  var element = seperateByKomma(elements);
  return element[getRndInteger(element.length)];
}

function seperateByKomma(string) {
  return string.split(",");
}

function getRndInteger(max) {
  return Math.floor(Math.random() * max);
}