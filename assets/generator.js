
var Sandwich = "basic"

function generate(){
  //var bread = seperateByKomma(breads);
  var bread = get(breads);
  if (bread.search("Bread")<0) {
    bread = bread + "Bread";
  }
  Sandwich = bread
  + " filled with"
  + get(meat) + ","
  + get(vegs) + ","
  + get(cheese) + " cheese"+ " and"
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
