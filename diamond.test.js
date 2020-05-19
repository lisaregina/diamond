const {diamond} = require("./diamond");
describe("diamond", ()=>{

    it("should pass the test", ()=>{
        console.log("D");
        expect("D").toEqual("D")
    })

    it("should be D for D", ()=>{
        expect(diamond("D")).toEqual("D")
    })

    describe("diamond", ()=>{
    it("should return all letters of alphabet till given letter", ()=>{
        expect(diamond("B")).toEqual(bet = ["A", "B"])
    })
    })
    
//     it("should display - - A - B, ()=>{
//         expect(diamond("C")).toEqual(result=[ "-", "-", "A", "-", "B", "C"])
//     })
});