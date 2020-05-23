const {diamond} = require("./diamond");
describe("diamond", ()=>{

    it("should pass the test", ()=>{
        console.log("D");
        expect("D").toEqual("D")
    })

    it("should display easiest diamond, -A-", ()=>{
        expect(diamond("A")).toEqual(['-', 'A', '-'])
    })

    it("should display A, B, C ", ()=>{
        expect(diamond("C")).toEqual(['A', 'B', 'C'])
    })
})

//aus Kolloquium, zur Inspiration/Verständnis
// const{diamond, edge} = require("./diamond2")

// describe("diamond2", ()=>{
//     it("should output A for A", ()=>{
//         expect(diamond("A")).toEqual("A")
//     })
//     describe("edge", ()=>{
//         it("should return A, B for B", ()=>{
//             expect(edge("B")).toEqual(["A","B"])
//         })
//         it("should return -A\nB- for B", ()=>{
//             expect(edge("B")).toEqual(["-A","B-"])
//         })
//     })

// })