const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

const getAllPropValues = function(arr, prop){
    const arr_values = [];
    for(let i = 0; i < arr.length; i += 1){
        const keys = Object.keys(arr[i]);
        let obj = arr[i];
        for(let key of keys){
            if(key === prop){
                arr_values.push(obj[key]);
            }
        }
    }
    return arr_values;
}

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'category'));

//Денис делал через hasOwnProperty(prop) - функция, которая заменяет мой второй for 