export function head(value: string): string;
export function head(value: number[]): number;
export function head(value: string[]): string;
export function head(value: boolean[]): boolean;
export function head(value: Date[]): Date;
export function head(value: any): any {
	return value[0];
}

interface ModelData {
	title: string;
	value: string; //number [] boolean
}
