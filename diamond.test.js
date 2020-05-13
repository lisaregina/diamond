const {diamond} = require("./diamond");

describe("diamond", ()=>{
    it("shoul pass the test", ()=>{
        console.log("D");
        expect("D").toEqual("D")
    })

    // it("should be the same letter", ()=>{
    //     //console.log(diamond("A"));
    //     expect(diamond("A")).toEqual("A")
    // })

    it("should be within the array", ()=>{
        console.log(diamond(letter = "B"));
        expect(diamond(letter = "B")).toEqual("B")
    })

    it("should display a new array, containing the beginning of the alphabet till the letter", ()=>{
        console.log(diamond(letter = "D"));
        expect(diamond(bet = ["A", "B", "C", "D"])).toEqual(["A", "B", "C", "D"])
    })
});


    
