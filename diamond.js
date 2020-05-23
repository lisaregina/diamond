  function diamond(letter){      
    
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const symbol= '-';
    const end = alpha.indexOf(letter);                        //buchstabe als Index 
    var row = end * 2 + 1;                                    //gesamtanzahl der zeilen und der länge des diamanten
    var result = [];                                          //endergebnis
                                  
    
    if(end == 0){                                            //falls A eingegebn wird
        result.push(symbol);                               
        result.push(alpha[0]);
        result.push(symbol);
        return result;
    }

    if(end > 0){                                              //anderes als A eingegeben wird
    //anfang
    // var bet = alpha.slice(0, end + 1);                     //eingrenzen von alpha
    // Array.prototype.forEach.call(bet, i =>{
        for(i=0;  i < end; i++){                              //alle indexe durchgehen, da bei jeder schleife i +1 angefügt wird, solange i kleiner ist als end
            if(i == 0){ 	                                  //erste zeile
                for(j = i; j < end; j++){                     //index wird als parameter j genommen, hier 0, solange j kleiner als end ist, wird Symbol gepusht, Symbole außen
                    result.push(symbol);
                }
                result.push(alpha[i]);                        //Buchstabe A
                for(k = i; k < end; k++){                     //Symbole außen
                    result.push(symbol);
                }
        
            }

            if(i > 0 && i < end){                            //zweite bis vorletzte Zeile
                for(j = i; j < end; j++){                    //symbole außen
                    result.push(symbol);
                }
                result.push(alpha[i]);                       //buchstabe des Index i gepusht

                let diff = (end-i) *2;                       //diff ist index letter - index i, was die symbole außen darstellt, *2, weil an beiden kanten symbole gezeigt werden
                for(k; k < row -2 -diff; k++){               //solange k kleiner ist als die zeilenlänge - 2 * Buchstaben -2* die Symbole außen, wird symbol gepusht
                    result.push(symbol);
                }

                result.push(alpha[i])                      //buchstabe des index i 
                for(l = i; l < end; l++){                  //symbol außen
                    result.push(symbol);
                }

            }
    //mitte
            if(i == end){
                result.push(alpha[i]);
                for(j = 0; j < row - 2; j++){               //Symbol wird solange gepusht, bis parameter j der zeilenlänge - die 2 buchstaben am rand entspricht
                    result.push(symbol);
                }
                result.push(alpha[i]);
            }
        }
    //schluss
        for(i= end-1; i = 0; i--){                          //index beginnt mit end-1, vorletzer buchstabe, und geht alle indexe durch bis index 0 ist, also zieht jeweils i eins ab
            if(i > 0){
                for(j = i; j < end; j++){                   //Symbole außen werden solange hinzugefügt, bis j end entspricht
                    result.push(symbol);
                }
                result.push(alpha[i]);                      //Buchstabe
                let diff = (end-i) *2;                      //Symbole außen *2
                for(k; k < row -2 -diff; k++){              //Symbole innen
                    result.push(symbol);
                }
                result.push(alpha[i]);                      //Buchstabe
                for(l = i; l < end; l++){                   //Symbole außen
                    result.push(symbol);            
                }
            }
            if(i == 0){
                for(j = i; j < end; j++){                   //Symbole
                    result.push(symbol);
                }
                result.push(alpha[i]);                      //Buchstabe
                for(j = i; j < end; j++){
                    result.push(symbol);                    //Symbole
                }
            }
    }//)
    }
    console.log("result");   
    return result;  
}
 module.exports = {diamond : diamond};

