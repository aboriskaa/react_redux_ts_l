type Level = 'junior' | 'middle' | 'senior';

export interface Developer {
	login: string;
	skills: string[];
	level: Level;
}

let obj3: Developer = {
	login: 'boris',
	skills: ['JS', 'TS'],
	level: 'junior',
};

// create a function that change level of incoming developer
function gradeDeveloper(user: Developer, newLevel: Level): Developer {
	user.level = newLevel;
	return user;
}

console.log(gradeDeveloper(obj3, 'senior'));
