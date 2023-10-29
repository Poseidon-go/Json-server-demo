const { faker } = require('@faker-js/faker');
const fs = require('fs');
// set locale to use Vietnamese
// const { fakerVI: faker } = require("@faker-js/faker");
const { json } = require('body-parser');

// random data
// console.log(faker.commerce.uuid());

function randomCategoryList(n) {
  if (n <= 0) return [];
  const categoryList = [];

  // loop and push caregory
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: Date.now(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    categoryList.push(category);
  });
  return categoryList;
}

function randomProductList(n) {
  if (n <= 0) return [];
  const productList = [];

  // loop and push caregory
  Array.from(new Array(n)).forEach(() => {
    const product = {
      id: Date.now(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    productList.push(product);
  });
  return productList;
}
// main
(() => {
  // prepare db object
  const categoryList = randomCategoryList(4);
  const products = randomProductList(4);
  const db = {
    categories: categoryList,
    products: products,
    profile: {
      name: 'poseidon',
    },
  };

  //  write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('GENERATE DATA SUCCESSS =)))');
    console.log('SERVER SUCCESS');
  });
})();
