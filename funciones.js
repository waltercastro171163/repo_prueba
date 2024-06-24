
function saludar(){

    console.log('Hola como estan muchachos')
}
saludar()

function sumar(a,b){

    return a+b
}

const suma= sumar(5,8)
console.log('La suama es '+ suma)


const colores=["amarillo", "azul", "rojo","negro"]

const rta= colores.find( color=> color==="negro" )
console.log(rta)


//! Revisar como funciona este continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
  