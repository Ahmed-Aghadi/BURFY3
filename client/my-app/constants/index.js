const burfyAbi = require("./Burfy.abi.json")
const burfyInsuranceAbi = require("./BurfyInsurance.abi.json")
const contractAddress = require("./contractAddress.json")
const burfyContractAddress = contractAddress.burfy
const currency = "FTM"
module.exports = {
    burfyAbi,
    burfyInsuranceAbi,
    burfyContractAddress,
    currency,
}
