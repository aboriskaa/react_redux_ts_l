export function head(value: string): string;
export function head(value: number[]): number[];
export function head(value: boolean[]): boolean[];

export function head(value: any): any {
	return value[0];
}

console.log(head('a'));

const a = head('dfds');

const b = head([0, 1, 2]);

const c = head([true, false]);
