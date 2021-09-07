console.log('How many total categories are there', category.length);

var products = [];
var fiveLevelProducts = [];
var productsCategory = [];
var productsCount = [];

category.forEach((item, index) => {
  productsCategory = [];
  function func(obj) {
    if(index === 4){
      fiveLevelProducts.push(obj.products)
    }
    products.push(obj.products);
    productsCategory.push(obj.products);
    if (!obj.children) {
      return;
    }

    obj.children.forEach(child => func(child))
    
  }

  func(item);
  const productsCountPerCategory = productsCategory.reduce(function(a,b){
    return a + b
  })
  productsCount.push(productsCountPerCategory);
})

const totalProducts = products.reduce(function(a,b){
  return a+b;
})
console.log('How many total products are there?', totalProducts)

const max = productsCount.reduce(function(a,b){
  return Math.max(a,b);
})

const fiveLevelProductsCount = fiveLevelProducts.reduce(function(a,b) {
    return a + b;
})

console.log('How many total products are there in 5th-level categories?',fiveLevelProductsCount );

const maxCount =  productsCount.findIndex(element => element === max)
console.log('Which top-level category, including its children, contains the most products?', maxCount + 1 ,'th category=>', category[maxCount].name)

const min = productsCount.reduce(function(a,b){
  return Math.min(a,b);
})

const minCount =  productsCount.findIndex(element => element === min);

console.log(' Which top-level category, including its children, contains the fewest products?', minCount + 1 , 'th category=>', category[minCount].name);

