
function diamond(letter, bet){      
    
   const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//     a = "A";
//  if(letter === a){
//      console.log(letter);
//  }

if(alpha.includes(letter)){
    
    end = alpha.indexOf(letter);
    
    let bet = [];
    
    bet = alpha.map(          //erstellt ein Array bet, dass alpha beinhaltet mit den geslicten Elementen
                letter => alpha.slice(0, end + 1));      //end+1, weil sonst der gegebene Buchstabe sonst nicht enthalten ist

    console.log(letter);
    console.log(bet);
  };



return letter;
return bet;
}


module.exports = {diamond};