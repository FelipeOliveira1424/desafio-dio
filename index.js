let nomeJodador = "Felipe"; //nome do jogador
let nivelJogador = 75; //nivel do jogador
let manaJogador = 0 // mana do jogador
const maxMana= 500 // nível máximo de mana


//sobre a mana do jogador
console.log(`${Felipe} estava com zero mana e usou quatro potes de mana.`);

//usa quatro potes de mana, cada um aumentando 50 de mana
for (let i = 0; i < 4; i++) {
    manaJogador += 50; 
}


// Laço de repetição que vai aumentar o nível do jogador até que ele seja classificado como Diamante
while (nivelJogador <= 100) {
    // Estrutura de decisão para classificar o jogador de acordo com o nível
    if (nivelJogador < 30) {
        console.log(`${nomeJogador}: você é um jogador Bronze`);
    } else if (nivelJogador >= 30 && nivelJogador < 50) {
        console.log(`${nomeJogador}: você é um jogador Prata`);
    } else if (nivelJogador >= 50 && nivelJogador < 80) {
        console.log(`${nomeJogador}: você é um jogador Ouro`);
    } else if (nivelJogador >= 80) {
        console.log(`${nomeJogador}: você é um jogador Diamante`);
    }
    
    nivelJogador += 10; // Aumenta o nível do jogador em 10 a cada iteração
}


manaJogador += 40; // Cada poção aumenta 40 de mana

// Verifica se a mana do jogador excede o nível máximo e ajusta se necessário
if (manaJogador > maxMana) {
    manaJogador = maxMana; // Limita a mana ao valor máximo permitido
}

console.log(`Mana atual do jogador ${nomeJogador}: ${manaJogador}`);
