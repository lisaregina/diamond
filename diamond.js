
function diamond(letter){      
    
    alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//     a = "A";
//  if(letter === a){
//      console.log(letter);
//  }

if(alpha.includes(letter)){
    console.log(letter);
};


    // alpha.indexOf(end);
    
    // const letter = alpha.map(
    // alpha.slice(0, end +1)); //end+1, weil sonst der gegebene Buchstabe sonst nicht enthalten ist

//alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

return letter;
}


module.exports = {diamond};