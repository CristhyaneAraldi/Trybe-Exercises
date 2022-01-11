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

  // fs.readFile('./arquivo2.txt', 'utf-8', (err, content) => {
  //   if (err) console.log(err);
  
  //   const arrayDeNomes = (content.split('\n'))
  //     .map((linha) => linha.split('-'));
    
  //   const obj2 = Object.fromEntries(arrayDeNomes);
    
  //   console.log(obj2);

  // });

  // fs.readFile('./arquivo3.txt', 'utf-8', (err, content) => {
  //   if (err) console.log(err);
  
  //   const arrayDeNomes = (content.split('\n'))
  //     .map((linha) => linha.split('-'));
    
  //   const obj3 = Object.fromEntries(arrayDeNomes);
    
  //   console.log(obj3);

  // });
  
}

leitorCallback();

