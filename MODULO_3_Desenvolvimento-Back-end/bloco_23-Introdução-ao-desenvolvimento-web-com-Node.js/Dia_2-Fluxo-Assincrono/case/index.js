// callback > promise > async/await
const fs = require('fs');

// resposta utilizando callback:
const leitorCallback = () => {

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

// resposta utilizando promise (then/catch):

// resposta utilizando promise (async/await):
