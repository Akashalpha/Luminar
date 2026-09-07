class car{
    #engineOp(){
        console.log("Engine Operations Started")
    }
    startCar(){
        this.#engineOp();
        console.log("Car Started")
    }
}
let c1 = new car();
c1.startCar()