let word: string | null = null;
const num = 10;
if (num > 5) {
	word = 'abc';
}

console.log(word!.toLowerCase());

function printName1(name?: string) {
	const fullName: string = name!;
}

interface Person {
	name: String;
	age: number;
	sex: 'female' | 'male';
}

function printName2(person?: Person) {
	console.log(person!.name);
}

const people: Person[] = [
	{ name: 'Gran', age: 70, sex: 'female' },
	{ name: 'Papa', age: 72, sex: 'male' },
	{ name: 'Mom', age: 35, sex: 'female' },
];

const femalePeople = people.find((person) => person.sex === 'female')!;
