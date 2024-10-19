var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

// Create a function to remove duplicates from the groceries array //
//Log out the length of the groceries variable to see how many elements are in the array

console.log(groceries.length);

// Create a new variable called deleteDuplicates with list as a parameter
var deleteDuplicates = function(list) {
  var cleanList = [];

  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }

  return cleanList;
};

