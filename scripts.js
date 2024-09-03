// exercicio 1
// ===========================================================================
function éQuadradoPerfeito(numero) {
  let aux = Math.sqrt(numero); // tirando a raiz quadrada do numero
  return aux * aux == numero; // retorna novamente o numero para a saída
}

function éFibonnaci(x) {
  // verifica por meio dessa duas formulas se o numero em questão faz parte da
  //sequencia de fibonnci, no caso se um dos resultados der que o numero é um quadrado
  //perfeito quer dizer que ele é da sequencia
  return éQuadradoPerfeito(5 * x * x + 4) && éQuadradoPerfeito(5 * x * x - 4);
}

let num1 = 21; // teste true

if (éFibonnaci(num1)) {
  console.log("este numero é da sequencia");
} else {
  console.log("numero nao pertece a sequencia");
}

let num2 = 4; //teste false
if (éFibonnaci(num2)) {
  console.log("este numero é da sequencia");
} else {
  console.log("numero nao pertece a sequencia");
}
//===============================================================
//exercicio 2
//===============================================================
function contarAs(string) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "a") {
      contador++;
    }
  }
  console.log(
    `a letra a aparece tanto maiuscula tanto minuscula ${contador} vezes`
  );
}

contarAs("AAAAAA");
//===============================================================
//exercicio 3
//===============================================================
let indice = 12;
let soma = 0;
let k = 1;
while (k < indice) {
  k += 1;
  soma += k;
}

console.log(soma);

//===============================================================
//exercicio 4
//===============================================================
// a) 9
// b) 128
// c) 49 - 7^2
// d) 100 - 10^2
// e) 13
// f) 20
//===============================================================
//exercicio 5
//===============================================================
// VAMOS SUPOR QUE VOCE ACENDA O INTERRUPTOR A E B, VOCE DEIXA O INTERRUPTOR B LIGADO POR UM TEMPO E DESLIGA-O
// LOGO SE VOCE ENTRAR NA SALA QUE ESTA ACESA, VOCE SABE QUE ESTA É O INTERRUPTOR A, E DEPOIS VÁ EM OUTRA SALA
// PARA VER SE A LAMPADA ESTÁ QUENTE, SE NAO TIVER É O INTERRUPTOR C QUE NÃO FOI LIGADO, SE ESTIVER QUENTE É O B
// QUE ESTAVA LIGADO

// OBS: PENSEI MUITO, MUITO TEMPO MESMO PARA DAR UMA RESPOSTA FORA DO PADRÃO MAS NÃO TEM COMO FAZER SEM CONSIDERAR QUE A LAMPADA ESQUENTE :(

