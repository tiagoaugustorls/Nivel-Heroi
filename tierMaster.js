// A solução Node.js exige o módulo 'readline'
const readline = require('readline');

// Configura a interface de leitura/escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- FUNÇÃO DE GERAÇÃO DE XP (do seu código anterior) ---
function gerarXPAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Solicita o nome do herói usando rl.question
rl.question("Digite o nome do Herói: ", (nomeDoHeroi) => {
    
    const xpDoHeroi = gerarXPAleatorio(1, 11000);
    let nivelDoHeroi;

    // --- Sua Lógica de Classificação de XP (Simplificada) ---
    if (xpDoHeroi >= 10001) {
        nivelDoHeroi = "Radiante";
    } else if (xpDoHeroi >= 9001) { 
        nivelDoHeroi = "Imortal";
    } else if (xpDoHeroi >= 8001) { 
        nivelDoHeroi = "Ascendente";
    } else if (xpDoHeroi >= 7001) { 
        nivelDoHeroi = "Platina";
    } else if (xpDoHeroi >= 5001) { 
        nivelDoHeroi = "Ouro";
    } else if (xpDoHeroi >= 2001) { 
        nivelDoHeroi = "Prata";
    } else if (xpDoHeroi >= 1001) { 
        nivelDoHeroi = "Bronze";
    } else { 
        nivelDoHeroi = "Ferro";
    }
    // --------------------------------------------------------

    // Saída final no console
    console.log(`\nO Herói de nome **${nomeDoHeroi}** obteve ${xpDoHeroi} de XP e está no nível de **${nivelDoHeroi}**`);
    
    // Fecha a interface de leitura
    rl.close();
});