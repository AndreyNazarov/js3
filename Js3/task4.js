const countTotalSalary = function(employees) {
    const values = Object.values(employees);
    let Total = 0;
    for (const value of values){
    Total += value;
    }
    return `total:${Total}`;
  };
 
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400
  