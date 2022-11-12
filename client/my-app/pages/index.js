import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { ethers } from "ethers"
import { AppShell, Navbar, Header } from "@mantine/core"
import { NavbarMinimal } from "../components/Navigation"
import { useAccount, useSigner } from "wagmi"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { burfyAbi, burfyContractAddress } from "../constants"
import axios from "axios"
import Insurances from "../components/Insurances"

export default function Home() {
    const { isConnected } = useAccount()
    const router = useRouter()
    const { data: signer, isError, isLoading } = useSigner()

    const [insurances, setInsurances] = useState([])
    const [insuranceData, setInsuranceData] = useState([])

    useEffect(() => {
        fetchInsurances()
        fetchDatas()
    }, [])

    const fetchInsurances = async () => {
        const contractInstance = new ethers.Contract(
            burfyContractAddress,
            burfyAbi,
            ethers.getDefaultProvider("https://rpc.testnet.fantom.network")
        )
        const data = await contractInstance.getContracts()
        setInsurances(data)
        console.log("data", data)
    }

    const fetchDatas = async () => {
        try {
            const options = {
                method: "POST",
                url: `https://deep-index.moralis.io/api/v2/${burfyContractAddress}/function`,
                params: { chain: "eth", function_name: "getContracts" },
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                    "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY,
                },
                data: { abi: burfyAbi },
            }

            axios
                .request(options)
                .then(function (response) {
                    setInsuranceData(response.data)
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.error(error)
                })
        } catch (error) {}
    }

    return (
        <div className={styles.container}>
            <Insurances insurances={insurances} />
        </div>
    )
}
