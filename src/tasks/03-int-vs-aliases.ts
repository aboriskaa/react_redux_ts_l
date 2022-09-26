// type Product = {
// 	price: number;
// 	isNew: boolean;
// 	isSale: boolean;
// 	title: string;
// };

// type Vehicle = {
// 	wheels: number;
// 	year: Date;
// 	brand: string;
// };

// type Car = {
// 	type: string;
// 	model: string;
// } & Product &
// 	Vehicle;

interface Product {
	price: number;
	isNew: boolean;
	isSale: boolean;
	title: string;
}

interface Vehicle {
	wheels: number;
	year: Date;
	brand: string;
}

interface Car extends Product, Vehicle {
	type: string;
	model: string;
}

const car1: Car = {
	price: 100,
	isNew: true,
	isSale: true,
	title: 'Title',
	wheels: 10,
	year: new Date(3, 4, 2033),
	brand: 'Brand',
	type: 'Type',
	model: 'Model',
};
