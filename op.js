function ops(a,b){
    return a+b, a-b, a*b, a/b;
}
const a = require('readline').createInterface({
    input: process.stdin,
    ouput:process.stdout
})
const b = require('readline').createInterface({
    input: process.stdin,
    ouput:process.stdout
})

a,b.question(("Ingrese el primer nuemero"), a,b => {
    console.log(`El resultado es: ${a},${b}`);
});






