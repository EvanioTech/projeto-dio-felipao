// criando meu heroi
const nomeHeroi = "Octadroid"
let xpHeroi = 0

for (let i = 0; i <= 10000 ; i++) 
{ xpHeroi += 1 
console.log("ganhou xp " + i);
}
 console.log("ultimo level " + xpHeroi );
    
 switch (xpHeroi) {
    case xpHeroi <= 1000: 
    console.log("Ferro")
        
        break
        case xpHeroi <= 2000: 
    console.log(`Bronze`)
        
        break
        case xpHeroi <= 5000: 
    console.log(`Prata`)
        
        break
        case xpHeroi <= 7000: 
    console.log(`Ouro`)
        
        break
        case xpHeroi <= 8000: 
    console.log(`Platina`)
        
        break
        case xpHeroi <= 9000: 
    console.log(`Ascendente`)
        
        break
        case xpHeroi <= 10000: 
    console.log(`Imortal`)
        
        break
        case xpHeroi = 10001: 
    console.log("Parabens Você é um Challenger")
        
        break
 
    default:
        console.log("noob")
        break
 } 
    
 console.log("O Heroi de nome " + nomeHeroi + " "+ "nivel de xp " + xpHeroi)

/* Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**
:::::
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

