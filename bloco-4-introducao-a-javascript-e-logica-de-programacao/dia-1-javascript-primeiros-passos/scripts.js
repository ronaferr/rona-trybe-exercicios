//const a = 3
//const b = 4


//let soma = a+b
//console.log(soma)


//let Subtração = a-b
//console.log(Subtração)

//let Multiplicação = a*b
//console.log(Multiplicação)

//let Divisão = a/b
//console.log(Divisão)

//let Módulo = a%b
//console.log(Módulo)

//if (a>b) {console.log(a)}
//else {console.log(b)}

//let a = 0
//let b = 3
//let c = 6
//let maior = ""
//if (a>b) {maior=a}
//else {maior=b}
//if (maior<c) {maior=c}
//console.log(maior)

//if (a>0){console.log("positivo")}
//else if (a<0){console.log("negativo")}
//else {console.log("zero")}

//const a = -2
//const b =60
//const c =60

//let soma = a+b+c

//if (a < 0|| b < 0 || c < 0)
//{console.log("erro")}
//else if (soma === 180)
//{console.log("valido")}
//else {console.log("invalido")}

//let nota = 30

//if (nota < 0 || nota > 100)
//console.log(erro)
//else if (nota >= 90)
//{console.log("A")}
//else if(nota >= 80)
//{console.log("B")}
//else if(nota >= 70)
//{console.log("C")}
//else if(nota >= 60)
//{console.log("D")}
//else if(nota >= 50)
//{console.log("E")}
//else
//{console.log("F")}

//let a =4
//let b =2
//let c =6

//if (a%2==0 || b%2==0 || c%2==0)
//{console.log("true")}
//else {console.log("false")}

//if (a%2!==0 || b%2!==0 || c%2!==0)
//{console.log("true")}
//else {console.log("false")}

//let quantidade = 1000
//let custo =20
//let valor =40
//let imposto = custo*0.20
//let custoTotal = (custo + imposto)*quantidade

//let valorVenda = valor*quantidade


//if(custo<0||valor<0)
//console.log("erro")
//else {console.log(valorVenda - custoTotal)}

let salarioBruto = 2000
let inss =""
let ir =""

if (salarioBruto <= 1556.94){inss = salarioBruto*0.08}
else if (salarioBruto <= 2594.92){inss = salarioBruto*0.09}
else if (salarioBruto <= 5189.82){inss = salarioBruto*0.11}
else {inss = 570.88}

if (salarioBruto <= 1903.98){ir = 0}
else if (salarioBruto <= 2826.65){ir =(salarioBruto*0.075)-142.80}
else if (salarioBruto <= 3751.05){ir =(salarioBruto*0.15)-354.80}
else if (salarioBruto <= 4664.68){ir =(salarioBruto*0.225)-636.13}
else {ir =(salarioBruto*0.275)-869.36}

let salarioLiquido = (salarioBruto - inss) -ir

console.log(salarioLiquido)
