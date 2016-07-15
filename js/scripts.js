// Pizza constructor
function Pizza(name, toppings, size, finalCost) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;   // small, medium, large, or mega
  this.finalCost = finalCost;
};

//number of items in the toppings array to calculate Cost
Pizza.prototype.numberToppings = function() {
  var toppingsTotal = 0;
  this.toppings.forEach(function() {
  toppingsTotal += 1;
  });
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
  } else if (this.size === "xlarge") {
      currentCost = 28;
      multiplyer = 2;
  }
  currentCost += (((this.numberToppings()) - 1) * multiplyer);
  return currentCost;
};

// jQuery
$(function() {
  $("#options form").submit(function(event) {
  event.preventDefault();

  $("#final").text("");

  var pizzaSize = $("input:radio[name=size]:checked").val();

  var toppers = [];
  $.each($("input:checkbox[name='toppings']:checked"), function() {
    // toppings.push($(this).val());
    toppers.push(parseInt(($(this).val())));
  });

  // alert("My toppings are: " + toppers.join(", "));
  console.log(pizzaSize, toppers);

  var newPizza = new Pizza("", toppers, pizzaSize, 0);

  console.log(newPizza);
  // console.log(newPizza.cost());
  // var cost = newPizza.cost();
  // console.log(cost);
  newPizza.finalCost = newPizza.cost();
  console.log(newPizza.finalCost);

  $("#results").show();
  $("#cost").append("$ " + newPizza.finalCost);
  });
});
