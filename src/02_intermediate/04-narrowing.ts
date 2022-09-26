function example1(x?: number | string) {
	if (typeof x === 'string') {
		x.toUpperCase;
	} else if (typeof x === 'number') {
		x.toFixed;
	} else if (x === undefined) {
		console.log('no value');
	} else {
		x; // TS type "never"
	}
}

function example2(str: string | string[] | null) {
	// if (str && typeof str === 'object')
	if (Array.isArray(str)) {
		str.concat([]);
	} else if (typeof str === 'string') {
		str.toLowerCase();
	}
}

function example3(x: number[] | Date) {
	if (x instanceof Date) {
		x.getHours();
	} else {
		x.concat([]);
	}
}

export type Fish = { swim: () => void };
export type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
	if ('swim' in animal) {
		return animal.swim();
	}
	return animal.fly();
}
