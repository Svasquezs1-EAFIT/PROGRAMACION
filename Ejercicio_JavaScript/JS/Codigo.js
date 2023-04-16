/* PUNTO UNO*/

let h1=parseFloat(prompt("Digite un numero 1"))
let h2=parseFloat(prompt("Digite un numero 2"))
var res = 0
if(h1 == h2){
    res = (h1 * h2)
    alert("La multiplicacion es: " + res)
}else if(h1 > h2){
    res=( h1- h2 )
    alert("La resta es: " + res)
}else{
    res = (h1 + h2)
    alert("La suma es: " + res)
}



/* PUNTO DOS*/

let h3=parseFloat(prompt("Digite un numero 1"))
let h4=parseFloat(prompt("Digite un numero 2"))
let h5=parseFloat(prompt("Digite un numero 3"))

if(h3 > h4){
    if(h3 > h5){
        alert("el numero mayor es: " + h3)
    }
}else if(h4 > h5){
    alert("El numero mayor es: " + h4)
}else{
    alert("El numero mayor es: " + h5)
}



/*PUNTO 3 */

let t=prompt("si llevas mas de un año ingresa 1 de lo contrasrio 2")
let salari=prompt("Cuanto ganas")
if(t==1){
    let años= prompt("Cuantos años: ")
    if (años >= 1 && años < 2){
        alert("Sus utilidades es de: " + (salari*7)/100)
    }else if(años >= 2 && años < 5){
        alert("Sus utilidades es de: " + (salari*10)/100)
    }
    else if(años >= 5 && años < 10){
        alert("Sus utilidades es de: " + (salari*15)/100)
    }else if(años >= 10){
        alert("Sus utilidades es de: " + (salari*20)/100)
    }
}else if(t==2){
    alert("Sus utilidades es de: " + (salari*5)/100)
}



/* PUNTO 4 */

let nombre = prompt("Ingresa tu nombre")
let edad = parseInt(prompt("Ingresa tu edad"))
let tiemp= parseInt(prompt("cuanto tiempo llevas en años"))
if(edad>=60 && tiemp <25){
    alert("Señor "+nombre+" usted se clasifica en la jubilacion edad")
}else if(edad>=60 && tiemp >= 25){
    alert("Señor "+nombre+" usted se clasifica en la jubilacion antiguedad joven")
}else if(edad>=60 && tiemp >= 25){
    alert("Señor "+nombre+" usted se clasifica en la jubilacion joven antiguedad adulta")
}else{
    alert()
}


/*PUNTO 5 */

let prom=parseFloat(prompt("Ingresa tu promedio"))
let tipo =prompt("Eres de pregrado o posgrado")
var cr = 0
var pre = 0
var pos = 0
if(prom >= 4.5 && tipo == "pregrado"){
    cr = 28
    pre = 50000
    t = pre * cr
    des = (t * 25)/100
    total = t - des
    alert("El valor a pagar es de: " + total)

}else if(prom >= 4.0 && prom <4.5 && tipo == "pregrado"){
    cr = 25
    pre = 50000
    t = pre * cr
    des = (t * 10)/100
    total = t - des
    alert("El valor a pagar es de: " + total)
}else if(prom >3.5 && prom <4.0 && tipo == "pregrado"){
    cr = 20
    pre = 50000
    t = pre * cr
    total = t
    alert("El valor a pagar es de: " + total)
}else if(prom >=2.5 && prom <3.5 && tipo == "pregrado"){
    cr = 15
    pre = 50000
    t = pre * cr
    total = t
    alert("El valor a pagar es de: " + total)
}else if(prom < 2.5 && tipo == "pregrado"){
    alert("No te podras matricular")

}else if(prom >4.5 && tipo == "posgrado"){
    cr = 20
    pos = 300000
    t = pos * cr
    des = (t * 20)/100
    total = t - des
    alert("El valor a pagar es de: " + total)
}else if(prom <4.5 && tipo == "posgrado"){
    cr = 10
    pos = 300000
    t = pos * cr
    total = t
    alert("El valor a pagar es de: " + total)
}