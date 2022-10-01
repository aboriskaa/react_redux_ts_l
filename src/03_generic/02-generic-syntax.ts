// Array<string>
// string[]
//Promise<number>

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

export function toArray<T>(...arg: T[]) {
	return arg;
}

toArray(1, 2, 3);

toArray('dsf', 'dfd');

function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
	return value[0];
}

head(['12', '232dsf3']);

const head1 = <T>(value: T[]): T => value[0];

interface ModelData<T> {
	title: string;
	value: T; //number [] boolean
}

const obj1: ModelData<number> = {
	title: 'dsfsd',
	value: 12,
};

const obj2: ModelData<Array<number>> = {
	title: 'sdfasdf',
	value: [2342],
};
