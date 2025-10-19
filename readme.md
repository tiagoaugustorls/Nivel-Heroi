# 🛡️ Classificador de Nível de Herói  ⚔️

Este é um programa em **JavaScript** desenvolvido para simular o sistema de classificação de nível de heróis, comumente encontrado em jogos de RPG (Role-Playing Games). O projeto foi criado como parte de um desafio de lógica de programação.

## Descrição

O aplicativo armazena o nome do herói (solicitado ao usuário) e atribui a ele uma quantidade de Experiência (**XP**) gerada de forma **aleatória** (no intervalo de 1 a 11.000). Em seguida, utiliza uma estrutura de decisão (`if/else if/else`) para classificar o herói em um de oito níveis, que variam do inicial **Ferro** até o máximo **Radiante**.

## Funcionalidades Principais

* **Entrada Interativa:** O nome do herói é solicitado diretamente ao usuário via `prompt()` (adequado para execução em ambiente de navegador).
* **XP Dinâmica:** A Experiência do herói é gerada aleatoriamente usando as funções `Math.random()` e `Math.floor()`.
* **Classificação Lógica:** Utiliza operadores de comparação e estruturas condicionais para determinar o nível com base em faixas de XP pré-definidas.
* **Saída Clara:** O resultado final é exibido ao usuário com o nome, o valor exato da XP gerada e o nível alcançado.

## Níveis de Exemplo

| XP (Experiência) | Nível |
| :---: | :---: |
| 1 - 1000 | Ferro|
| 1001 - 2000 | Bronze |
| 2001 - 5000 | Prata |
| 5001 - 7000 | Ouro |
| 7001 - 8000 | Platina |
| 8001 - 9000 | Ascendente |
| 9001 - 10000 | Imortal |
| 10001 - 11000 | Radiante |
