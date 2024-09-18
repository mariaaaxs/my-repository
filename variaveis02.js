let forma = 'triângulo'
let base = 20;
let altura = 40;
let arearetangulo = altura * base;
let areatriangulo = (altura * base) / 2;
// let areaRetangulo = altura * base;
// let areaTriangulo = (altura * base);
let area; 
 
// Condicional Se... Então...

if(  forma === 'retângulo' ){
    area = altura * base;
    console.log(areaRetangulo)
} else {
    area = ( altura * base) / 2
    console.log(areaTriangulo)
}

// Boolean
const usuarioLogado = true
const contaPaga = false;

// Truthy ou falsy
// 0 -> false
// 1 -> true
console.log(0 == false)// retorna verdadeiro(True)
console.log(''== false)// retorna verdadeiro(True)
console.log(1 == true); //retorna verdadeiro(true)

console.log(contapaga) == 1);

// underfined -> não definido;
// null -> vazio ou nulo;

let minhavar;
let varnull = null;
let numero = 3 ;
let string = 'oi';

console.log(typeof minhavar);
console.log(typeof varnull);
console.log(typeof numero);
console.log(typeof string);
