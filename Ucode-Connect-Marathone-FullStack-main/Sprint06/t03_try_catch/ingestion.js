exports.Ingestion = class {
    meal_type =['breakfast', 'lunch', 'dinner'];
    products = [];
    constructor(id, day_of_diet) {
        this.id = id;
        this.day_of_diet = day_of_diet;
    }
    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(product) {
        let result;
        this.products.forEach(item => {
            if (item.name == product)
                result = item;
        });
        return result;
    }

    getFromFridge(product) {
        let productInfo = this.getProductInfo(product);
        EatException(productInfo);
    }
}
const {EatException} = require("./eat-exception");
const {Product} = require("./product");
const {Ingestion} = require("./ingestion");
const productNames = [
  'Nutella',
  'Chicken',
  'Coca-Cola',
  'Biscuit',
  'Brocolli',
  'Tomatoes',
  'Apple',
  'Potato',
  'Pizza',
  'Beer'
];

const randomInt = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
}

const stock = new Ingestion('breakfast', 1);

productNames.forEach(name => {
  stock.setProduct(new Product(name, randomInt(40, 500)))
})

productNames.forEach(productName => {
  console.log(`***\nGetting ${productName} that has`,`${stock.getProductInfo(productName).kcal} calories.`);
  try {
    stock.getFromFridge(productName);
    console.log(`You're doing great, ${productName} is good!`)
  } catch (error) {
    console.log(`Caught exception: ${error.message}!`,
    `Throw ${productName} away!`)
  }
})
