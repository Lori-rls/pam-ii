function msgTeste() {
    console.log("TESTE")
}

msgTeste()

function msgTesteArgumento(param) {
    console.log("O parâmetro passado foi:", param)
}

msgTesteArgumento("woo");

function soma(i, j){
    let result;
    if (typeof i == "number" && typeof j == "number") {
        result = i+j
        return result
    }
    return "Erro no tipo das variáveis"
    //o return encerra a leitura da função, logo o else não é necessário
}

console.log(soma("g", 654))
console.log(soma(12364, 35452))
