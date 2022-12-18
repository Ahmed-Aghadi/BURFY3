import React, { useState } from "react"

const ChainContext = React.createContext({
    chain: "fantom",
    setChain: (chain: string) => {},
})

export const ChainContextProvider = (props: any) => {
    const [chain, setChain] = useState("fantom")
    return (
        <ChainContext.Provider
            value={{
                chain: chain,
                setChain: (chain: string) => {
                    setChain(chain)
                },
            }}
        >
            {props.children}
        </ChainContext.Provider>
    )
}

export default ChainContext
