const path=require("path")

const fs=require("fs")

const solc=require("solc")

const TestPath=path.resolve(__dirname,"contracts","Test.sol")

const source=fs.readFileSync(TestPath,"utf8")

//To test the compilation process
// console.log(solc.compile(source,1))

module.exports=solc.compile(source,1).contracts[":Test"]
