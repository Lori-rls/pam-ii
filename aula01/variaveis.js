let i
var opa = "a"
console.log(opa)

var objeto = {
    atributo1: 3,
    atributo2: "string do objeto",
    atributo3: ["array", "de", "string", "do", "objeto"],
    atributo4: ["array", "de", "string", "do", "objeto", "com", "laço", "de", "repetição"]
}

console.log(objeto.atributo1)
console.log(objeto.atributo2)
console.log(objeto.atributo3[0], objeto.atributo3[1], objeto.atributo3[2], objeto.atributo3[3], objeto.atributo3[4], "\n")

for(i=0; i<=20; i++){
    if(i%3==0){
        console.log("O número", i, "é divisível por 3")
    } else {
        console.log("O número", i, "não é divisível por 3")
    }
}