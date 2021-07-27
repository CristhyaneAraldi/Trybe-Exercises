// aula ao vivo
// alterando informações de objeto
const pessoa = {
    nome: 'cris',
    sobrenome: 'gargioni',
  }
  
  pessoa.sobrenome = 'garcia';
  console.table(pessoa);
  
  pessoa['sobrenome'] = 'araldi';
  console.table(pessoa);
  
  // inserindo nova propriedade
  pessoa.cidade = 'lages';
  console.table(pessoa);
  
  pessoa['estado'] = 'SC';
  console.table(pessoa);