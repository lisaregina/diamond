
function diamond(letter){      
    
   const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  
      end = alpha.indexOf(letter);
      let bet = [];
      
      bet = alpha.map(          //erstellt ein Array bet, dass alpha beinhaltet mit den geslicten Elementen
                      letter => alpha.slice(0, end + 1)
                     );      //end+1, weil sonst der gegebene Buchstabe nicht enthalten ist
      
  let symbol = '-';

  let demo = [];          //Array, zum Ausgeben des Diamanten
  

  Array.prototype.forEach.call(bet, elem =>{
    for(let i= bet.indexOf[elem]; i<=end+1; i++){
      demo.push(symbol);
    }
    demo.push(elem);
    //hier die Symbole in der Mitte
    for(let j =bet.indexOf[elem] > 1; j === end +1; j++){
      demo.push(symbol);
    }
    demo.push(elem);
    for(let i= bet.indexOf[elem]; i<=end+1; i++){
      demo.push(symbol);
    }
    demo.push('<br>');
  })    


      console.log(letter);
      console.log(bet);
      console.log(demo);
    
  

return letter;
return bet;
return demo;
};
module.exports = {diamond};