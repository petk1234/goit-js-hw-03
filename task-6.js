const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

const calculateTotalPrice = function(allProducts, productName){
    let total = 0;
    for(let product of allProducts){
        for(let key of Object.keys(product)){
            if(product[key] === productName){
                total =+ product.price * product.quantity;
            }
        }
    }
    return total;
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800