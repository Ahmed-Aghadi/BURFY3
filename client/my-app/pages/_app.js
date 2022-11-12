import "../styles/globals.css"
import {
    AppShell,
    MantineProvider,
    ColorSchemeProvider,
    Navbar,
    Header,
    Grid,
    Text,
    Button,
    SimpleGrid,
} from "@mantine/core"
import { NavbarMinimal } from "../components/Navigation"
import { useLocalStorage } from "@mantine/hooks"
import { ConnectButton, darkTheme, lightTheme } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { publicProvider } from "wagmi/providers/public"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, useSigner, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { NotificationsProvider } from "@mantine/notifications"
import { useAccount } from "wagmi"
import { IconCircleDotted } from "@tabler/icons"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { fantomChain } from "../constants/fantomChain"

const { chains, provider } = configureChains([fantomChain], [publicProvider()])

const { connectors } = getDefaultWallets({
    appName: "Sigmator",
    chains,
})

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
})

function MyApp({ Component, pageProps }) {
    const [colorScheme, setColorScheme] = useLocalStorage({
        key: "mantine-color-scheme",
        defaultValue: "dark",
    })

    const toggleColorScheme = (value) => {
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))
    }

    const { isConnected } = useAccount()
    const router = useRouter()

    const titleClick = () => {
        router.push("/")
    }

    // to fix hydration error
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <WagmiConfig client={wagmiClient}>
            <NotificationsProvider position="top-right" zIndex={2077}>
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <RainbowKitProvider
                        chains={chains}
                        theme={colorScheme === "dark" ? darkTheme() : lightTheme()}
                    >
                        <ColorSchemeProvider
                            colorScheme={colorScheme}
                            toggleColorScheme={toggleColorScheme}
                        >
                            <ColorSchemeProvider
                                colorScheme={colorScheme}
                                toggleColorScheme={toggleColorScheme}
                            >
                                <MantineProvider
                                    theme={{ colorScheme }}
                                    withGlobalStyles
                                    withNormalizeCSS
                                >
                                    <AppShell
                                        padding="md"
                                        navbar={<NavbarMinimal />}
                                        header={
                                            <Header height={60} p="xs">
                                                <Grid
                                                    justify="space-between"
                                                    columns={2}
                                                    align="center"
                                                    pl={35}
                                                    pr={35}
                                                    mt={2}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() => {
                                                            titleClick()
                                                        }}
                                                    >
                                                        <Text
                                                            size={25}
                                                            weight={700}
                                                            sx={{ marginRight: "5px" }}
                                                        >
                                                            Burfy
                                                        </Text>
                                                        <IconCircleDotted size={35} />
                                                    </div>
                                                    <div>
                                                        <ConnectButton />
                                                    </div>
                                                    {/* <ConnectButton /> */}
                                                </Grid>
                                            </Header>
                                        }
                                        styles={(theme) => ({
                                            main: {
                                                backgroundColor:
                                                    theme.colorScheme === "dark"
                                                        ? theme.colors.dark[8]
                                                        : theme.colors.gray[0],
                                            },
                                        })}
                                    >
                                        <Component {...pageProps} />
                                    </AppShell>
                                </MantineProvider>
                            </ColorSchemeProvider>
                        </ColorSchemeProvider>
                    </RainbowKitProvider>
                </MantineProvider>
            </NotificationsProvider>
        </WagmiConfig>
    )
}

export default MyApp
