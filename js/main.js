var speedOnfoot = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedplane = 800;

var elForm = document.querySelector(".form");
var userDistances = document.querySelector(".input__form");
var error = document.querySelector(".error");


var onfootResult = document.querySelector(".onfoot_result");
var bikeResult = document.querySelector(".bike_result");
var carResult = document.querySelector(".car_result");
var planeResult = document.querySelector(".plane_result");


function Speed() {
    elForm.addEventListener("submit", function(evt) {
        evt.preventDefault()

        var input = Number(userDistances.value.trim())

        if(isNaN(input)) {
            error.textContent = "Raqam kiriting!!!" 

            return
        }

        onfootResult.textContent = (input / speedOnfoot).toFixed(2)
        bikeResult.textContent = (input / speedBike).toFixed(2)
        carResult.textContent = (input / speedCar).toFixed(2)
        planeResult.textContent = (input / speedplane).toFixed(2)

    })
}


Speed()