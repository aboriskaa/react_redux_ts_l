// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role
export interface User {
	login: string;
	email: string;
	password: string;
	isOnline: boolean;
	lastVisited: Date;
}

const user1: User = {
	login: 'boris',
	email: 'boris@boris.boris',
	password: 'boris',
	isOnline: true,
	lastVisited: new Date(2022, 09, 24),
};

interface Admin {
	login: string;
	email: string;
	password: string;
	isOnline: boolean;
	lastVisited: Date;
	role: string;
}

const admin1: Admin = {
	login: 'boris',
	email: 'boris@boris.boris',
	password: 'boris',
	isOnline: true,
	lastVisited: new Date(2022, 09, 24),
	role: 'root',
};

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user
function Authentication(user: { login: string; password: string }): void {
	if (user.login || user.password)
		console.log('Nice to meet you, ' + user.login);
}

Authentication(admin1);
