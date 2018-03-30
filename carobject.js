//Car Object Challenge
function makeNewCar (newModleYear, newMake, newColor){
    var newCar = {
        modelyear: newModleYear,
        make: newMake,
        color: newColor,
        speed: 0,
    }
    return {
        brake: function () {
            newCar.speed = newCar.speed - Math.ceil(Math.random() * Math.ceil(newCar.speed / 2))

        },
        accelerate: function () {
        newCar.speed = newCar.speed +10
        if (newCar.speed > 85) {
            newCar.speed = 85
        }
    },
        getSpeed: function () {
            return newCar.speed
        },
        getCar: function () {
            return newCar.modelyear + " "+newCar.make+ " " + newCar.color
        }
    }
}
var car = makeNewCar(2018, "ford", "red")

function speedUp(car1){
    while (car1.getSpeed() < 70) {
        car1.accelerate ()
        console.log (car1.getSpeed())
    }
}

speedUp(car)

function slowDown(car2){
    while (car2.getSpeed() > 0) {
        car2.brake ()
        console.log (car2.getSpeed())
    }
}

slowDown (car)
