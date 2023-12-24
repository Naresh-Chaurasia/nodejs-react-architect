
var cars = [
    { model: 'Buick', price: 'cheap' },
    { model: 'Camaro', price: 'expensive' },
  ];

var prices = cars.map(function(car){
    return car.price
});

console.log(prices);