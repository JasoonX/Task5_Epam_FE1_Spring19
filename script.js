class Car {
  constructor(brand, model, year, color, price, regNumber) {
    this.checkProps(brand, model, year, color, price, regNumber);
    this.id = Car.count;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.regNumber = regNumber;

    Car.count++;
  }
  checkProps(brand, model, year, color, price, regNumber) {
    if (typeof brand !== "string")
      throw new SyntaxError("Brand must be a string");
    if (typeof model !== "string")
      throw new SyntaxError("Model must be a string");
    if (typeof year !== "number")
      throw new SyntaxError("Year must be a number");
    if (typeof color !== "string")
      throw new SyntaxError("Color must be a string");
    if (typeof price !== "number")
      throw new SyntaxError("Price must be a number");
    if (typeof regNumber !== "string")
      throw new SyntaxError("Registation number must be a string");
  }
}
Car.count = 0;

function filterBrand(cars, brandName) {
  checkCars(cars);
  if (typeof brandName !== "string")
    throw new SyntaxError("Brand name must be a string");
  let c = cars.filter(car => car.brand === brandName);
  return c;
}

function checkCars(cars) {
  cars.forEach(car => {
    if (!(car instanceof Car))
      throw new SyntaxError("Cars must be an array of cars");
  })
}

function filterExpluatationAndModel(cars, model, expluatationAmount) {
  checkCars(cars);
  if (typeof model !== "string")
    throw new SyntaxError("Brand name must be a string");
  if (typeof expluatationAmount !== "number")
    throw new SyntaxError("Expluatation amount must be a string");
  let c = cars.filter(car => car.model === model && expluatationAmount >=
    2019 - car.year);
  return c;
}

function filterYearAndPrice(cars, price, year) {
  checkCars(cars);
  if (typeof price !== "number")
    throw new SyntaxError("Price must be a number");
  let c = cars.filter(car => car.price < price && car.year === year)
  return c;
}
let cars;

function init(carsLength) {
  let brandNames = ["Honda", "Hundai", "Opel", "Mercedes", "McLaren", "Ferrari",
    "BMW", "Nissan"
  ];
  let cars = [];
  while (carsLength != 0) {
    let carBrand = brandNames[parseInt(Math.random() * 8)];
    let carModel = String.fromCharCode(parseInt(Math.random() * 25) + 65) +
      parseInt(Math.random() * 10);
    let carYear = parseInt(Math.random() * 19) + 2000;
    let carColor = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},0.8)`;
    let carPrice = parseInt(Math.random() * 1000000) + 10000;
    let carRegNum =
      String.fromCharCode(parseInt(Math.random() * 25) + 65) +
      String.fromCharCode(parseInt(Math.random() * 25) + 65) +
      parseInt(Math.random() * 9) +
      parseInt(Math.random() * 9) +
      parseInt(Math.random() * 9) +
      parseInt(Math.random() * 9) +
      String.fromCharCode(parseInt(Math.random() * 25) + 65) +
      String.fromCharCode(parseInt(Math.random() * 25) + 65);
    let car = new Car(
      carBrand,
      carModel,
      carYear,
      carColor,
      carPrice,
      carRegNum
    );
    cars.push(car);
    carsLength--;
  }
  return cars;
}

function showCars(container) {
  document.getElementById(container).innerHTML = "";
  document.getElementById('cars2').innerHTML = "";
  document.getElementById('cars3').innerHTML = "";
  document.getElementById('cars4').innerHTML = "";

  cars = init(20);
  cars.forEach(value => {
    print(container, value);
  })
}

function print(container, value) {
  let carDiv = document.createElement("div");
  carDiv.setAttribute("style", `width:120px;height:120px;background:${value.color};text-align:center`);
  let text = document.createElement("h4");
  let textnode = document.createTextNode(`${value.brand} ${value.model}`);
  let text2 = document.createElement("h5");
  let textnode2 = document.createTextNode(`${value.year} ${value.price}$`);
  text.appendChild(textnode);
  text2.appendChild(textnode2);
  carDiv.appendChild(text);
  carDiv.appendChild(text2);
  document.getElementById(container).appendChild(carDiv);
}

function showFilterBrand(cars, container) {
  let brandName = document.getElementById("input1").value;
  document.getElementById(container).innerHTML = "";
  filterBrand(cars, brandName).forEach(value => {
    print(container, value);
  })
}

function showFilterYearAndPrice(cars, container) {
  let price = parseInt(document.getElementById("input2").value);
  let year = parseInt(document.getElementById("input5").value);
  document.getElementById(container).innerHTML = "";
  filterYearAndPrice(cars, price,year).forEach(value => {
    print(container, value);
  })
}

function showFilterExpluatationAndModel(cars, container) {
  let brand = document.getElementById("input3").value;
  let year = parseInt(document.getElementById("input4").value);
  document.getElementById(container).innerHTML = "";
  filterExpluatationAndModel(cars, brand, year).forEach(value => {
    print(container, value);
  })
}