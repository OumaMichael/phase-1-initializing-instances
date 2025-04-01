class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
class Dinner {
  #dessert; // private field
  
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert; // private property
  }
  
  // Optional method to get the private dessert property
  getDessert() {
    return this.#dessert;
  }
}
// Create instances for Breakfast
let breakfast1 = new Breakfast("Pancakes", "Coffee");
let breakfast2 = new Breakfast("Omelette", "Tea");

// Create instances for Lunch
let lunch1 = new Lunch("Caesar Salad", "Chicken Soup", "Water");
let lunch2 = new Lunch("Greek Salad", "Tomato Soup", "Lemonade");

// Create instances for Dinner
let dinner1 = new Dinner("Garden Salad", "Minestrone", "Steak", "Chocolate Cake");
let dinner2 = new Dinner("Caesar Salad", "Clam Chowder", "Salmon", "Apple Pie");

// Accessing properties
console.log(breakfast1); // Breakfast { food: 'Pancakes', drink: 'Coffee' }
console.log(lunch1); // Lunch { salad: 'Caesar Salad', soup: 'Chicken Soup', drink: 'Water' }
console.log(dinner1); // Dinner { salad: 'Garden Salad', soup: 'Minestrone', entree: 'Steak' }
// Access private dessert field using a method
console.log(dinner1.getDessert()); // Chocolate Cake
