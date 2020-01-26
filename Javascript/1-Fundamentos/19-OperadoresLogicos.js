//podemos comparar valores com os operadores lógicos

/*com o operador &&(E) ao comparar ele retorna o valor verdadeiro
se todas as comparações forem veidadeiras*/

//(cinco maior que tres)verdadeiro E (nove maior que oito)Verdadeiro
console.log((5 > 3) && (9 > 8))//true

//(cinco menor que tres)false E (nove maior que oito)Verdadeiro
console.log(5 < 3 && 9 > 8)//false

/*Já com o operador ||(OU) precisamos que apenas um tenha o resultado
verdadeiro que ele vai retornar veidadeiro*/

//(cinco menor que tres)false E (nove maior que oito)Verdadeiro
console.log(5 < 3 || 9 > 8)//true
