// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostasCertas = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  return callback();
};

const checagem = () => {
  // const numRespCorretas = 0;
  // const pontCorrestas = 1;
  // const pontIncorretas = 0.5;
  let pontFinal = 0;
  for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
    if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
      // numRespCorretas += 1;
      pontFinal += 1;
    } else if (STUDENT_ANSWERS[index] === "N.A") {
      pontFinal += 0;
    } else {
      pontFinal -= 0.5;
    }
  };
  console.log(`Resultado final: ${pontFinal} pontos`);
};

respostasCertas(RIGHT_ANSWERS, STUDENT_ANSWERS, checagem);