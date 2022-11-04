const assert = require("assert");

const ganache = require("ganache-cli");

const Web3 = require("web3");

const provider = ganache.provider();

const web3 = new Web3(provider);

const { interface, bytecode } = require("../compile");

const INITIAL_MESSAGE = "Salam Eleikom";
let accounts;
let test;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  object = JSON.parse(interface);

  test = await new web3.eth.Contract(object)
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: "1000000" });

  test.setProvider(provider);
});

describe("Test Contract", () => {
  
    it("deploy a contract", () => {
    assert.ok(test.options.address);
  });

  it("has a default message", async() => {
    const message=await test.methods.message().call()
   assert.equal(message,"Salam Eleikom") 
  })

});
