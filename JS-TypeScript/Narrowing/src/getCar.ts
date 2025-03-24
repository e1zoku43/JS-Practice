type Car = {
    brand: string;
    model: string;
    year: number;
  };
  
  type CarWithBrand = {
    brand: string;
  };
  
  function getCar(car: Car | CarWithBrand): string {
    if ('model' in car && 'year' in car) {
      return `Машина: ${car.brand} ${car.model}, год выпуска: ${car.year}`;
    } else {
      return `Машина: ${car.brand}`;
    }
  }
  
  const car1: Car = { brand: 'Toyota', model: 'Camry', year: 2020 };
  const car2: CarWithBrand = { brand: 'BMW' };
  
  console.log(getCar(car1)); 
  console.log(getCar(car2)); 
  