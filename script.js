//Constructor funcation with 10 properties.
function ToyCar(modelName, carBrand, carColor, carScale, carType, carMeterial, carWeight, carLength, manufactureYear, carPrice){
    this.modelName = modelName;
    this.carBrand = carBrand;
    this.carColor = carColor;
    this.carScale = carScale;
    this.carType = carType;
    this.carMeterial = carMaterial;
    this.carWeight = carWeight;
    this.carLength = carLength;
    this.manufactureYear = manufactureYear;
    this.carPrice = carPrice;
    this.available = true; //default value.
    this.toggleAvailability = function(){
        this.available = !this.available;
    };

}

//array ro store car objects.
const toyCar = [];

//DOM references.
const carForm = document.getElementById("carFrom");
const carList = document.getElementById("carList");

//add new car using form.
carForm.addEventListener("submit", function(event){
    event.preventDefault();

//input values 
const modelName = document.getElementById("modelName").value;
const carBrand = document.getElementById("carBrand").value;
const carColor = document.getElementById("carColor").value;
const carScale = document.getElementById("carScale").value;
const carType = document.getElementById("carType").value;
const carMeterial = document.getElementById("carMeterial").value;
const carWeight = document.getElementById("carWeight").value;
const carLength = document.getElementById("carLength").value;
const manufactureYear = parseInt(document.getElementById("manufactureYear").value);
const carPrice = parseFloat(document.getElementById("carPrice").value);

//creating new toy car.
const newCars = new ToyCar(modelName, carBrand, carColor, carScale, carType, carMeterial, carWeight, carLength, manufactureYear, carPrice);

//adding arry to display
toyCar.push(newCars);
displayCar();

//reset form
carForm.reset();
});