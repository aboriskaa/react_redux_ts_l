export interface User {
	readonly email: string;
	readonly login: string;
	password: string;
}

export interface User {
	isOnline?: boolean;
}

// interface Window {
// 	isAuth?: boolean;
// }
// window.isAuth;

// const user1: User = {};

export interface Person {
	readonly firstName: string;
	lastName: string;
	phone?: string;
	yearOfBirth?: number;
}

export interface Employee extends User, Person {
	contractStart: Date;
}

export interface Developer extends Employee {
	skills: string[];
	phone: string;
	level?: 'junior' | 'middle' | 'senior';
	say(): void;
	code?: (arg: string) => void;
}

// const user1: Developer = {

// }

// class MyDeveloper implements Developer {}
