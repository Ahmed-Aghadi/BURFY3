const burfyAbi = require("./Burfy.abi.json")
const burfyInsuranceAbi = require("./BurfyInsurance.abi.json")
const contractAddress = require("./contractAddress.json")
const burfyContractAddress = contractAddress.burfy
const currency = { mumbai: "MATIC", fantom: "FTM", goerli: "ETH" }
module.exports = {
    burfyAbi,
    burfyInsuranceAbi,
    burfyContractAddress,
    currency,
}
