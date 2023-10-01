let personagem
let xp
function saldoRankeada(vitorias, derrotas){
    personagem = "Toninho"
    xp = 101
    let rankeada = vitorias - derrotas
    return rankeada
}

let resultado = saldoRankeada(20, 10)

if (xp <= 10){
    console.log("Ferro")
 }
 else if (xp == 11 || xp == 20){
     console.log("Bronze")
 }
 else if (xp == 21 || xp == 50){
     console.log("Prata")
 }
 else if (xp == 51 || xp == 80){
     console.log("Ouro")
 }
 else if (xp == 81 || xp == 90){
     console.log("Diamante")
 }
 else if (xp == 91 || xp == 100){
     console.log("Lendário")
 }
 else if (xp >= 101){
     console.log("Imortal")
 }

 console.log("O Herói "+ personagem+ " tem "+ resultado+ " de rankeada e está no nível "+ xp)