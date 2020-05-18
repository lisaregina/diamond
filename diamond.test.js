const {diamond} = require("./diamond");

describe("diamond", ()=>{

    it("should pass the test", ()=>{
        console.log("D");
        expect("D").toEqual("D")
    })

    it("should be the same letter", ()=>{
        //console.log(diamond("A"));
        expect(diamond('D')).toEqual(letter = "D")
    })

    it("should display a new array, containing the beginning of the alphabet till the letter", ()=>{
        expect(diamond("F")).toEqual(letter = "F", bet =[ 'A', 'B', 'C', 'D', 'E', 'F'])
    })

    // it("should display symbol with element", ()=>{
    //     expect(diamond("D")).toEqual(dia=['-', 'A', '-', 'B','-', 'C', '-', 'D'])
    // })

});


    
