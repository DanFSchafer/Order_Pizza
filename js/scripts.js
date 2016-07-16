// Pizza constructor
function Pizza(name, toppings, size, finalCost) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;   // small, medium, large, or xlarge
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
//Display images of toppings


//Pizza options submit button
  $("#options form").submit(function(event) {
  event.preventDefault();

//get data from forms
  var pizzaSize = $("input:radio[name=size]:checked").val();
  var toppers = [];
  $.each($("input:checkbox[name='toppings']:checked"), function() {
    toppers.push(parseInt(($(this).val())));
  });

//create pizza object, and calculate cost
  var newPizza = new Pizza("", toppers, pizzaSize, 0);
  newPizza.finalCost = newPizza.cost();

//display results
  $("#results").show();
  // $("#cost").text("");
  $("#cost").text("$ " + newPizza.finalCost.toFixed(2));
  });
});
