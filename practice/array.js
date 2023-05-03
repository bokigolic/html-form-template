const button = document.getElementById('dugme')
const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla'];
const GetRandomCar = (() => {
  const randomIndex = Math.floor(Math.random() * cars.length);
  const randomCar = cars[randomIndex];
  console.log(`Your random car is: ${randomCar}`);
})
GetRandomCar()
