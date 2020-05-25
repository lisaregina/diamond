function edge(input){
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   
    const delta = alpha.indexOf(input);         //index von den gegebenen buchstaben
    
    const result1 = alpha.slice(0, delta+1)      //array, das alpha in a bis gegebenen buchstaben teilt, da kein ; da ist, kann durch .map neues hinzugefügt werden

            .map((char, index) => {             
                return '-'.repeat(delta-index) + char;          //symbole außen, index mit delta vergleichen + der buchstabe
            })

            .map((line, index) => {                             //symbole innen
                if(index > 0 ){
                    return line + '-'.repeat(index)        //wird obere map zeile ausgegeben, dann symbol eingefügt
                }
                else{
                    return line
                }  
            })

            .map((line, index) =>{                          //Symbole innen
                // console.log(line, index)         
                if(index == 0){                             
                return line 
                }else{
                    return line + '-'.repeat(index-1) 
                }
            })

            .map((line, index) =>{
                if(index ==0){
                    return line + '-'.repeat(delta)
                }else if(index > 0 && index < delta){
                    return line + alpha[index] + '-'.repeat(delta -index)       //alpha[index] als ausgabe des buchstaben verwendet, weil char nicht funktionierte
                }else{
                    return line + alpha[index]
                }
            })
    

    const mirror = alpha.slice(0, delta)                        //delta soll ausgeschlossen werden
            .map((char, index) => {             
                return '-'.repeat(delta-index) + char;          //symbole außen, index mit delta vergleichen + der buchstabe
            })
            
            .map((line2, index) => {                             //symbole innen
                if(index > 0 ){
                    return line2 + '-'.repeat(index)        //wird obere map zeile ausgegeben, dann symbol eingefügt
                }
                else{
                    return line2
                }  
            })

            .map((line2, index) =>{                          //Symbole innen
                // console.log(line, index)         
                if(index > 0){
                    return line2 + '-'.repeat(index-1) 
                }else{                             
                return line2 
                }
            })

            .map((line2, index) =>{
                if(index > 0){
                    return line2 + alpha[index] + '-'.repeat(delta-index)
                }
                else{
                    return line2 + '-'.repeat(delta)
                }
            })

            .reverse()                            //reihenfolge umkehren
                   
    result = result1.concat(mirror);
    result.join("\n");

    console.log(result);
    
    return result;
}
 module.exports = {edge};

