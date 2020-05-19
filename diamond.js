function diamond(letter){      
    
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 
    if(letter in alpha){
        return letter;
        console.log(letter);
    }
    const end = alpha.indexOf(letter);
    let bet = [];
    bet = alpha.slice(0, end + 1);//erstellt ein Array bet, dass alpha beinhaltet mit den geslicten Elementen
                                               //end+1, weil sonst der gegebene Buchstabe nicht enthalten ist
   let symbol = '-';
   let result = [];          //Array, zum Ausgeben des Diamanten
 
 //alternative zu einfach nur Zeile 11, sodass der Array im Test aufrufbar ist
  //    const tilGiven = (letter)=>{
//     const end = alpha.indexOf(letter);
//     const result = [];
//        result.push(alpha.slice(0, end+1)); //fügt die Buchstaben von index 0 bis einschließlich index von letter (gegebenen Buchstaben)
//        return result;
//        console.log(result);
//    } 
   Array.prototype.forEach.call(bet, elem =>{
      let currIndex = bet.indexOf(elem);
       for(i=currIndex; i>=end; i++){
          result.push(symbol);
       }
       result.push(elem);
    return result;   
   } 
   )
  console.log(result);
 
return bet;
return result;
 };
 module.exports = {diamond};

