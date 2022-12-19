import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { ethers } from "ethers"
import { AppShell, Navbar, Header, Button } from "@mantine/core"
import { NavbarMinimal } from "../components/Navigation"
import { useAccount, useSigner } from "wagmi"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { burfyAbi, burfyContractAddress } from "../constants"
import Insurances from "../components/Insurances"
import ChainContext from "../context/ChainProvider"
import { useContext } from "react"
import estimateGasFees from "../utils/estimateGasFees"
import axios from "axios"

export default function Home() {
    const ctx = useContext(ChainContext)
    const { isConnected } = useAccount()
    const router = useRouter()
    const { data: signer, isError, isLoading } = useSigner()

    const [insurances, setInsurances] = useState([])
    const [insurancesData, setInsurancesData] = useState([])

    useEffect(() => {
        setInsurances([])
        fetchInsurances()
        fetchInsurancesDatas()
    }, [ctx.chain])

    const fetchInsurances = async () => {
        console.log("retrieving insurances")
        const contractInstance = new ethers.Contract(
            burfyContractAddress[ctx.chain],
            burfyAbi,
            ethers.getDefaultProvider(
                ctx.chain == "fantom"
                    ? process.env.NEXT_PUBLIC_FANTOM_TESTNET_RPC_URL
                    : ctx.chain == "mumbai"
                    ? process.env.NEXT_PUBLIC_MUMBAI_RPC_URL
                    : process.env.NEXT_PUBLIC_GOERLI_RPC_URL
            )
        )
        let data = await contractInstance.getContracts()

        console.log("data", data)
        setInsurances(data)
        console.log("data", data)
    }

    const fetchInsurancesDatas = async () => {
        try {
            const data = await fetch(
                `https://deep-index.moralis.io/api/v2/${
                    burfyContractAddress[ctx.chain]
                }/function?chain=mumbai&function_name=getContracts`,
                {
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                        "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY,
                    },
                    body: JSON.stringify({ abi: burfyAbi, params: {} }),
                }
            )
            const res = await data.json()
            console.log("data1", res)
            setInsurancesData(res)
            return res
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <div className={styles.container}>
            <Insurances insurances={insurances} data={insurancesData} />
        </div>
    )
}
