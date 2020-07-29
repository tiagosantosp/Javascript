let texto = 'Em ciência da computação, uma expressão regular ou "Regex" (ou os estrangeirismos regex ou regeeeeexp [1] , abreviação do inglês regular expression) provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres. Expressões regulares são escritas numa linguagem formal que pode ser interpretada por um processador de expressão regular, um programa que serve um gerador de analisador sintático ou examina o texto e identifica as partes que casam com a especificação dada.'


// g é a flag para global 
// i é para ignorar case sensitive 
let regex = /(uma)/gi


//Objeto RegExp
console.log(regex.exec(texto)[0])//retorna um Array com o valor buscado

console.log(regex.test(texto))//verifica se possui a ocorrencia


//Objeto String
console.log(texto.match(regex))//retorna um Array com todas as ocorrencias encontradas

console.log()

console.log(texto.replace(regex, 'dois'))// replace substitui o valor por outro

console.log()

//Podemos utilizar o $ + numero referente aos grupos do REGEX
console.log(texto.replace(regex, '<li>$1</li>'))

console.log()

//podemos utilizar funções dentro do replace
console.log(texto.replace(regex, textoRegex => textoRegex.toLocaleUpperCase()))


// * (opcionais) 0 ou N {0,}
// + (obrigatorio) 1 ou N {1,}
// ? (opcionais) 0 ou 1 {0, 1}
// \ caractere com escape
// {n,m} minimo e maximo
// {10,} no minimo 10
// {,10} de 0 a 10
// {5, 10} de 5 a 10
// {10}

console.log()

//pega mesmo que tenha 1 ou mais letras E no texto "regex"
let regex2 = /rege*x/gi



let teste = texto.match(regex2)

console.log(teste)