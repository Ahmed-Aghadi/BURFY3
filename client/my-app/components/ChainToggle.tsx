import { SegmentedControl } from "@mantine/core"
import React, { useContext } from "react"
import ChainContext, { ChainContextProvider } from "../context/ChainProvider"

export function ChainToggle() {
    const ctx = useContext(ChainContext)
    return (
        <SegmentedControl
            value={ctx.chain}
            onChange={(value: string) => {
                ctx.setChain(value)
            }}
            data={[
                {
                    label: "Fantom",
                    value: "fantom",
                },
                {
                    label: "Mumbai",
                    value: "mumbai",
                },
                {
                    label: "Goerli",
                    value: "goerli",
                },
            ]}
        />
    )
}
