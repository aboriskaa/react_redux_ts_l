type Status = 'ok' | 'loading' | 'error'; //literals

const x5: Status = 'ok'; // one of the literals

const arr: (number | string)[] = [];

function printId(id: number | string): void {
	if (typeof id === 'string') console.log(id.toUpperCase);
	else console.log(id);
}

function welcome(person: [string, string] | string): string | number {
	if (Array.isArray(person)) {
		console.log('Hi!', person.join(' '));
		return 1;
	} else console.log('Hello', person);
	return person;
}
