import { ethers } from "ethers"

export default async function estimateGasFees(
    contractAddress,
    abi,
    useSigner, // use signer or provider
    signer,
    provider,
    functionName,
    argument
) {
    let contractInstance, gasPrice
    if (useSigner) {
        contractInstance = new ethers.Contract(contractAddress, abi, signer)
        gasPrice = await signer.provider.getGasPrice()
    } else {
        contractInstance = new ethers.Contract(contractAddress, abi, provider)
        gasPrice = await provider.getGasPrice()
    }
    const gasPriceFormat = ethers.utils.formatUnits(gasPrice, "gwei")
    console.log("gasPriceFormat", gasPriceFormat, ethers.utils.formatEther(gasPrice).toString())
    console.log("gasPrice", gasPrice.toString())
    const gasUsed = await contractInstance.estimateGas[functionName](argument, {
        value: ethers.utils.parseEther("0.5"),
    })
    const gasUsedFormat = ethers.utils.formatUnits(gasUsed, "gwei")
    console.log("gasUsedFormat", gasUsedFormat, ethers.utils.formatEther(gasUsed).toString())
    // const gasUsed = await contractInstance.estimateGas.step1_initiateAnyCallSimple_srcfee("test", {
    //     value: ethers.utils.parseEther("0.5"),
    // })
    console.log("tx", gasUsed.toString())
    const fees = gasUsed.mul(gasPrice)
    console.log("fees", fees.toString())
    console.log(
        "fees in eth",
        ethers.utils.formatEther(fees.toString()),
        ethers.utils.formatUnits(fees, "gwei")
    )
    console.log(
        "fees in eth1",
        ethers.utils.formatEther(
            ethers.utils.parseEther(
                (ethers.utils.formatEther(fees.toString()) * 100).toFixed(18).toString()
            )
        )
    )
    return fees
    // return ethers.utils.parseEther(
    //     (ethers.utils.formatEther(fees.toString()) * 100).toFixed(18).toString()
    // )
}
