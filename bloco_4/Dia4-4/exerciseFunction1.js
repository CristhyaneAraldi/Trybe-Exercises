
//1ª forma de resolução
function verificaPalindromo(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[string.length - index - 1]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verificaPalindromo('arara'));

/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/


//2ª forma de resolução
function verificaPalindromo(string) {
  for(index in string) {
    if (string[index] != string[(string.length - 1) - index]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));


//3ª forma de resolução
function verificaPalindromo(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));