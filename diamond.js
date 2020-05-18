
function diamond(letter){      
    
   const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

      end = alpha.indexOf(letter);

      let bet = [];
      
      bet = alpha.slice(0, end + 1);//erstellt ein Array bet, dass alpha beinhaltet mit den geslicten Elementen
                                              //end+1, weil sonst der gegebene Buchstabe nicht enthalten ist
      
    
  let symbol = '-';

  let dia = [];          //Array, zum Ausgeben des Diamanten


  Array.prototype.forEach.call(bet, elem =>{
     let currIndex = bet.indexOf(elem);
      for(i=currIndex; i>=end; i++){
         dia.push(symbol)
      }
  });


  console.log(letter);
  console.log(bet);
  console.log(dia);


return letter;
return bet;
return dia;

};
module.exports = {diamond};