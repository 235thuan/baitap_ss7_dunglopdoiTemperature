let Temperrature = function (Cdegree) {
    this.Cdegree = Cdegree;

    this.getC= function() {
        return this.Cdegree;
    };
    this.setC= function (a) {
         this.Cdegree=a

    };
    this.convertToF = function () {
        let Fara = Cdegree * 1.8 + 32;
        return Fara;
    };
    this.convertToKen = function () {
        let Ken =Cdegree + 273.15;
        return Ken;

    };

};
// let inputC = document.getElementById("123");
let inputC=25;
let display = new Temperrature(inputC);
let convertF=display.convertToF();
let convertK=display.convertToKen();

alert(inputC+" doC ="+convertF+" Fara"+" = "+ convertK + " Ken");
display.setC(30);
inputC=display.getC();
display=new Temperrature(inputC);
convertF=display.convertToF();
convertK=display.convertToKen();

alert(inputC+" doC ="+convertF+" Fara"+" = "+ convertK + " Ken");
