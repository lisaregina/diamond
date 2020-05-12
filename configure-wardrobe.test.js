
const {combination} = require("./configure-wardrobe") //verfügbarkeit für test function
describe("configure-wardrobe", () =>{
    it("should return sum == wall", () =>{
        console.log(combination(0));
        expect(combination(0)).toEqual([])
    })
    it("should return sum == 50", () =>{
        console.log(combination(50));
        expect(combination(50)).toEqual([50])
    })
});


    


