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

    it("should be the within array", ()=>{
        console.log(diamond("B"));
        expect(diamond("B")).toEqual("B")
    })
});


    
