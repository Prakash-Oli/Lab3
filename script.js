//Constructor funcation with 10 properties.
function ToyCar(modelName, carBrand, carColor, carScale, carType, carMaterial, carWeight, carLength, manufactureYear, carPrice){
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
})