function TriangleArea(base = 5, height = 4) {
    const area = 0.5 * base * height;
    console.log("Площа трикутника: " + area);
}

TriangleArea(3, 6);
TriangleArea();


function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.pointOfDestination = pointOfDestination;
}

Jet.prototype.AssignPilot = function(name, yearsOfExperience, hasChildren) {
    this.pilot = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasChildren: hasChildren
    };
};

Jet.AssignPilot = function(jet, name, yearsOfExperience, hasChildren) {
    jet.AssignPilot(name, yearsOfExperience, hasChildren);
};

var myJet = new Jet("black", 900, 50000, "Hughes", "New York");

Jet.AssignPilot(myJet, "John Smith", 30, true);
console.log(myJet);


class EquilateralTriangle {
    constructor(equalSide) {
        this._equalSide = equalSide;
    }

    get equalSide() {
        return this._equalSide;
    }
}

class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base = base;
    }

    
    static calculateArea(equalSide, base) {
        return (base / 4) * Math.sqrt(4 * (equalSide ** 2) - (base ** 2));
    }
}


const equilateralTriangle = new EquilateralTriangle(5);
console.log('Equilateral Triangle:', equilateralTriangle.equalSide);

const isoscelesTriangle = new IsoscelesTriangle(5, 6);
console.log('Isosceles Triangle:', isoscelesTriangle.equalSide);

const area = IsoscelesTriangle.calculateArea(isoscelesTriangle.equalSide, isoscelesTriangle.base);
console.log('Area of Isosceles Triangle:', area);



function AddGenerator(num) {
    return function(x) {
        return x + num;
    };
}


var addFive = AddGenerator(5);  
var addTen = AddGenerator(10);  


console.log("Додавання 5 до 3:", addFive(3));  
console.log("Додавання 10 до 7:", addTen(7));   
