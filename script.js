

function Car(brand, model, power, color, tankVolume, consumption) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.power = power;
    this.tankVolume = tankVolume;
    this.consumption = consumption;
    this.fuel = 1;

    this.sayHello = function() {
        return `I'm ${this.brand}, model ${this.model}, ${this.power} power horses, color ${this.color}, tank volume ${this.tankVolume}l, fuel consumtion ${this.consumption * 100} l/100 km`;
    }

    this.refill = function(liters) {
        /* let liters = 0; */
        this.fuel += liters;
    }

    this.drive = function(distance) {
        if (this.tankVolume / this.consumption >= distance) {
            return `I'm drivin' ${distance} km`;
        } else {
            return `Not enough fuel`;
        }
    }
}