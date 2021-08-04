const countTotalSalary = function(employees){
    let total = 0;
    const values = Object.values(employees);
    for(let value of values){
        total += value;
    }
    return total;
}

console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400