const numbers = [1, 2, 3, 4, true, ''];

const strs: string[] = [];
const strs2: Array<string> = [];

strs.push('asv');

export interface Car {
	wheels: number;
	brand: string;
	type?: string;
}

export const cars: Car[] = [];
cars.push({ brand: 'Audi', wheels: 3 });

const arrOfArr: string[][] = [];

arrOfArr.push(['', '']);

function printArr(arr: unknown[]): void {
	arr.forEach((el, index) => {
		console.log(index);
	});
}
