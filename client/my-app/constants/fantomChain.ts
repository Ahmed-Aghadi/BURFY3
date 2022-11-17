import { Chain } from "wagmi"

export const fantomChain: Chain = {
    id: 4002,
    name: "Fantom Testnet",
    network: "Fantom Testnet",
    nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "FTM",
        decimals: 18,
    },
    rpcUrls: {
        default: "https://rpc.ankr.com/fantom_testnet",
    },
    blockExplorers: {
        default: { name: "Ftmscan", url: "https://testnet.ftmscan.com" },
    },
    testnet: true,
}
