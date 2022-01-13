// callback > promise > async/await
const fs = require('fs');

// ------------------------------------------------------------------------------------------
// resposta utilizando callback:
const leitorCallback = () => {
  // arquivo1:
  fs.readFile('./arquivo1.txt', 'utf-8', (err, content) => {
    if (err) console.log(err);
  
    const arrayDeNomes = (content.split('\n'))
      .map((linha) => linha.split('-'));
    
    const obj = Object.fromEntries(arrayDeNomes);
    
    console.log(obj);

    fs.writeFile('./arquivo1.json', JSON.stringify(obj), (content)  => {
      if (err) console.log(err);
     
       console.log(`Arquivo lido com sucesso!`);
     });
  });

  // arquivo2:
  fs.readFile('./arquivo2.txt', 'utf-8', (err, content) => {
    if (err) console.log(err);
  
    const arrayDeNomes = (content.split('\n'))
      .map((linha) => linha.split('-'));
    
    const obj = Object.fromEntries(arrayDeNomes);
    
    console.log(obj);

    fs.writeFile('./arquivo2.json', JSON.stringify(obj), (content)  => {
      if (err) console.log(err);
     
       console.log(`Arquivo lido com sucesso!`);
     });
  });

};

leitorCallback();

// ------------------------------------------------------------------------------------------
// resposta utilizando promises (then/catch):

// arquivo1:
fs.promises.readFile('./arquivo1.txt', 'utf-8')
  .then((response) => {
    const arrayDeNomes = (response.split('\n'))
        .map((linha) => linha.split('-'));
      
    const obj = Object.fromEntries(arrayDeNomes);
    console.log(obj);

    fs.writeFile('./arquivo1.json', JSON.stringify(obj), (response)  => {
      console.log(`Arquivo lido com sucesso!`);
     });
  })
  .catch((err) => console.log(err));

// arquivo2:
fs.promises.readFile('./arquivo2.txt', 'utf-8')
  .then((response2) => {
    const arrayDeNomes2 = (response2.split('\n'))
        .map((linha) => linha.split('-'));
      
    const obj2 = Object.fromEntries(arrayDeNomes2);
    console.log(obj2);

    fs.writeFile('./arquivo2.json', JSON.stringify(obj2), (response2)  => {
      console.log(`Arquivo lido com sucesso!`);
     });
  })
  .catch((err) => console.log(err));

// ------------------------------------------------------------------------------------------
// resposta utilizando promises (async/await):

const main = async () => {

  // arquivo1:
  const content = await fs.promises.readFile('./arquivo1.txt', 'utf-8');
  const arrayDeNomes = (content.split('\n'))
      .map((linha) => linha.split('-'));
    
  const obj = Object.fromEntries(arrayDeNomes);
  console.log(obj);
  
  fs.writeFile('./arquivo1.json', JSON.stringify(obj), (content)  => {
    console.log(`Arquivo lido com sucesso!`);
  });

  // arquivo2:
  const content2 = await fs.promises.readFile('./arquivo2.txt', 'utf-8');
  const arrayDeNomes2 = (content2.split('\n'))
      .map((linha) => linha.split('-'));
    
  const obj2 = Object.fromEntries(arrayDeNomes2);
  console.log(obj2);
  
  fs.writeFile('./arquivo2.json', JSON.stringify(obj2), (content2)  => {
    console.log(`Arquivo lido com sucesso!`);
  });
};

main();

// ------------------------------------------------------------------------------------------
// outra opção: tratando erros do async/await com try/catch:
// arquivo1:
const main2 = async () =>  {
  try {
    const content = await fs.promises.readFile('./arquivo1.txt', 'utf-8');
    const arrayDeNomes = (content.split('\n'))
        .map((linha) => linha.split('-'));
    const obj = Object.fromEntries(arrayDeNomes);
    console.log(obj);
    fs.writeFile('./arquivo1.json', JSON.stringify(obj), (content)  => {
      console.log(`Arquivo lido com sucesso!`);
    });
  } catch (e) {
    console.log(e);
  }
};

main2();
