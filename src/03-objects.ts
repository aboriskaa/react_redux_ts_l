interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: string]: unknown; // when the number of parameters is unknown
}

const car: Car = {
  wheels: 4,
  brand: "BMW",
  type: "Sedan",
};
