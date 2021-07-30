// Para fixar
// Array.forEach
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// O email roberta@email.com esta cadastrado em nosso banco de dados!
// O email paulo@email.com esta cadastrado em nosso banco de dados!
// O email anaroberta@email.com esta cadastrado em nosso banco de dados!
// O email fabiano@email.com esta cadastrado em nosso banco de dados!