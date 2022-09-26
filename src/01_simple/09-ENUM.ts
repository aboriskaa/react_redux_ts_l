enum ShapeKid {
	Circle,
	Square,
}

const myShape = ShapeKid.Circle;

interface Circle {
	kind: ShapeKid.Circle;
	radius: number;
}

interface Square {
	kind: ShapeKid.Square;
	sideLength: number;
}

const circle1: Circle = {
	radius: 1,
	kind: ShapeKid.Circle,
};

enum StatusCode {
	ERROR = 500,
	NOT_FOUND = 404,
	NOT_AUTH = 403,
}

enum Grades {
	Junior = 'junior',
	Middle = 'middle',
	Senior = 'senior',
}

interface Dev {
	login: 'boris';
	skills: ['JS', 'TS'];
	level: Grades;
}

let obj4: Dev = {
	login: 'boris',
	skills: ['JS', 'TS'],
	level: Grades.Junior,
};

// create a function that change level of incoming developer
function upGrate(user: Dev): Dev {
	if (user.level === Grades.Junior) {
		user.level = Grades.Middle;
	} else if (user.level === Grades.Middle) {
		user.level = Grades.Senior;
	}
	return user;
}
