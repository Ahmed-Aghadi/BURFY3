const { network, ethers } = require("hardhat")
const {
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    networkConfig,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2
    let subscriptionId = networkConfig[chainId].subscriptionId
    let gasLane = networkConfig[chainId].gasLane
    let callbackGasLimit = networkConfig[chainId].callbackGasLimit
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    log("----------------------------------------------------")
    const arguments = ["abc", 2, 600, 500, 400, 300, 1, ethers.utils.parseUnits("0.01", "ether"), 1]
    // const burfy = await deploy("BurfyInsurance", {
    //     from: deployer,
    //     args: arguments,
    //     log: true,
    //     waitConfirmations: waitBlockConfirmations,
    // })
    log("----------------------------------------------------")
}

module.exports.tags = ["all", "burfyInsurance"]
