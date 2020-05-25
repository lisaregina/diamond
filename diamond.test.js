const {diamond, edge} = require("./diamond");
describe("diamond", ()=>{

    // it("should pass the test", ()=>{
    //     console.log("D");
    //     expect("D").toEqual("D")
    // })

    // it("should display easiest diamond, -A-", ()=>{
    //     expect(diamond("A")).toEqual(['-', 'A', '-'])
    // })

    xit("should display -A- -B-B- -A- for B ", ()=>{
        expect(diamond("B")).toEqual([ '-', 'A', '-', 'B', '-', 'B', '-', 'A', '-'])
    })
describe("edge", ()=>{

    xit("should return -A, B- for B", ()=>{
        expect(edge("B")).toEqual(["-A", "B-"])
    })

    xit("should return --A, -B-, C-- for C", ()=>{
        expect(edge("C")).toEqual(["--A", "-B-", "C--"])
    })

    xit("should return ---A, --B-, -C--, D--- for D", ()=>{
        expect(edge("D")).toEqual(["---A", "--B-", "-C--", "D---"])
    })

    xit("should return ---A---, --B-B--, -C---C-, D-----D for D", ()=>{
        expect(edge("D")).toEqual([["---A---", "--B-B--", "-C---C-", "D-----D"]])
    })


    fit("should return ---A---, --B-B--, -C---C-, D-----D, -C---, --B-, ---A for D", ()=>{
        expect(edge("D")).toEqual(["---A---", "--B-B--", "-C---C-", "D-----D", "-C---C-", "--B-B--", "---A---"])
    })

    it("should return --A-- -B-B- C---C -B-B- --A--", ()=>{
        expect(edge("C")).toEqual(["--A--", "-B-B-", "C---C","-B-B-", "--A--"])
    })
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