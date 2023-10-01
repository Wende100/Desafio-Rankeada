function rankeada(vitoria, derrota){
    return vitoria - derrota

}
const nivel="upando++"

let saldo = rankeada(130,22)

if(saldo < 10){
    console.log("Ferro")
}
if(saldo >10 && saldo < 20){
    console.log("Bronze")
}
if(saldo > 21 && saldo < 50){
    console.log("Prata")
}
if(saldo > 51 && saldo < 80){
    console.log("Ouro")
}
if(saldo >81 && saldo < 90){
    console.log("Diamante")
}
if(saldo > 91 && saldo < 100){
    console.log("Lendario")
}
if(saldo >= 100){
    console.log("Imortal")
}
console.log(`O heroi tem o saldo de ${saldo} no ranking, e está no nivel ${nivel}`)