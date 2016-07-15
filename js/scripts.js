// Pizza constructor
function Pizza(name, toppings, size, finalCost) {
  this.name = name;
  this.toppings = [];
  this.size = "";   // small, medium, large, or mega
  this.finalCost = finalCost;
};

//number of items in the toppings array to calculate Cost

Pizza.prototype.numberToppings = function() {
  var toppingsTotal = 0;
  this.toppings.forEach()
    toppingsTotal += 1;
    return toppingsTotal;
};

// Cost calculator prototype
Pizza.prototype.cost = function() {
  var currentCost = 0;
  var multiplyer = 0;
  if (this.size === "small") {
    currentCost = 12;
    multiplyer = 1;
  } else if (this.size === "medium") {
    currentCost = 16;
    multiplyer = 1.25;
  } else if (this.size === "large") {
    currentCost = 22;
    multiplyer = 1.5;
  } else {
      currentCost = 28;
      multiplyer = 2;

  currentCost += (this.numberToppings - 1) * multiplyer;
  return currentCost;
};



//jQuery
$(function() {
  $("#options form").submit(function(event) {
  event.preventDefault();

  $("#final").text("");

  var pizzaSize = $("input:radio[name=size]:checked").val();

  var toppings = [];
  $.each($("input:checkbox[name='toppings']:checked"), function() {
    toppings.push($(this).val());
  });

  // alert("My toppings are: " + toppings.join(", "));
  console.log(pizzaSize, toppings);

  var newPizza = new Pizza(name, toppings, size, finalCost);

  console.log (newPizza);

  var cost = newPizza.cost();

  console.log(cost);

  $("#results").show();
  $("#final").append("$ " + cost);
  });
});
