var car1 = new Object();
car1.color = "yellow";
car1.maxSpeed = 200;
car1.driver = {
    name: "Hnatiuk Julia",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "red",
    maxSpeed: 150,
    driver: {
        name: "Hnatiuk Julia",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

car1.drive = function() {
    console.log("I am not driving at night");
};


car2.drive = function() {
    console.log("I can drive anytime");
};


function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}


Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var message = "Driver " + this.driver.name + " ";
        message += this.driver.nightDriving ? "drives at night" : "does not drive at night";
        message += " and has " + this.driver.experience + " years of experience";
        console.log(message);
    }
};

var truck1 = new Truck("black", 5000, 60, "Audi", "A3");
truck1.AssignDriver("Daniel Smith", true, 15);
truck1.trip(); 

var truck2 = new Truck("blue", 6000, 50, "BMW", "M8");
truck2.AssignDriver("Mike Johnson", false, 5);
truck2.trip();
