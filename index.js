//CALCULADORA DE PARTIDAS RANKEADAS
//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
//depois disso retorne o restultado para uma variável, o salda de rankeadas deve ser feto através do cálculo
// vitórias - derrotas
function calcularSaldoRank(vitorias, derrotas) {
    var saldo = vitorias - derrotas;
    var nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return "O Herói tem de saldo de " + saldo + " e está no nível de " + nivel;
}

// Exemplo de uso:
var herois = [
    { nome: "Thor", vitorias: 15, derrotas: 10 },
    { nome: "Odin", vitorias: 20, derrotas: 10 },
    { nome: "Fenrir", vitorias: 50, derrotas: 0 },
    { nome: "Malcom", vitorias: 80, derrotas: 50 },
    { nome: "JoaozimdoPneu", vitorias: 150, derrotas: 40 }
];

for (var i = 0; i < herois.length; i++) {
    var heroi = herois[i];
    var resultado = calcularSaldoRank(heroi.vitorias, heroi.derrotas);
    console.log(heroi.nome + ": " + resultado);
}


