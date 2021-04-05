
var Sandwich = "basic"

function generate(){
  //var bread = seperateByKomma(breads);
  var bread = get(breads);
  if (bread.toLowerCase().search("bread")<0) {
    bread = bread + " Bread";
  }
  var vegetables = "";
  var number = getRndInteger(4);
  for (var i = 0; i < number; i++) {
    let newVeg = get(vegs);
    if (vegetables.search(newVeg)<0) {
      vegetables = vegetables + newVeg+ ",";
    }
  }
  var eggs = "";
  if (getRndInteger(10)>6) {
    eggs = get(egg) + ","
  }

  Sandwich = bread
  + " filled with"
  + get(meat) + ","
  + eggs
  + vegetables
  + get(cheese) + " Cheese"+ " and"
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
