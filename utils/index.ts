export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "d9f60bd6dcmsh398fbd4e41d8e9dp13fbb0jsn6e307ad27d4e",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}



export const calculateCarRent = (city_mpg: number, year: number) => {
  if (typeof city_mpg !== "number") {
    city_mpg = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
  }

  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return Number(rentalRatePerDay.toFixed(0));
};
