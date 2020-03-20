function multiplicar(...numeros){    
    return resultado = numeros.map(elementos => {  
    let acumulador = 1  
    for (item of numeros){
      if (item == elementos) {continue}      
      acumulador *= item
      }
    return acumulador
    })}

console.log(multiplicar(1,2,3,4,5))