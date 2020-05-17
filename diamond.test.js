const {diamond} = require("./diamond");

describe("diamond", ()=>{

//     it("should pass the test", ()=>{
//         console.log("D");
//         expect("D").toEqual("D")
//     })

    // it("should be the same letter", ()=>{
    //     //console.log(diamond("A"));
    //     expect(diamond("A")).toEqual("A")
    // })

    // it("should be within the array", ()=>{
    //     console.log(diamond(letter = "B"));
    //     expect(diamond(letter = "B")).toEqual("B")
    // })

    it("should display a new array, containing the beginning of the alphabet till the letter", ()=>{
        console.log(diamond(letter = "D"));
        expect(diamond(bet = ["A", "B", "C", "D"])).toEqual(["A", "B", "C", "D"])
    })

    it("should display the index-amount of symbols", ()=>{
        console.log(diamond(letter = "B"));
        expect(diamond(demo=['-', '-'])).toEqual(demo=['-', '-'])
    })

    it("should display symbols and letter and symbols", ()=>{
        console.log(diamond(letter = "D"));
        expect(diamond(demo=[ '-', '-', '-', 'A','-', '-', '-', '-', '-', 'B', '-', '-', '-', 'C', '-', 'D'])).toEqual(demo=[ '-', '-', '-', 'A','-', '-', '-', '-', '-', 'B', '-', '-', '-', 'C', '-', 'D'])
    })

});


    
