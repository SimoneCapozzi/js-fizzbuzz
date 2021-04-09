//arrayNumeri
var numeri = [];

//variabili
var fizz = "fizz";
var buzz = "buzz";

//ciclo

for (var i = 0; i < 100; i++) {
  numeri[i] = i + 1;
  /* console.log(numeri[i]); */
  if(numeri[i] % 3 === 0 && numeri[i] % 5 !== 0){
    console.log(fizz);
  }else if(numeri[i] % 3 !== 0 && numeri[i] % 5 === 0){
    console.log(buzz);
  }else if(numeri[i] % 3 === 0 && numeri[i] % 5 === 0){
    console.log(fizz + buzz);
  }else{
    console.log(numeri[i]);
  }
}







