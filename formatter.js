function format(num) {
    const safeNum = Number(num) || 0

    if (safeNum < 100) {
        return Math.round(safeNum).toString()
    }

    const match = [
        { value: 1e3, symbol: "K" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" }
    ]

    const item = match.findLast((obj) => safeNum >= obj.value)

    if (!item) {
        return safeNum.toLocaleString("en-US", { maximumFractionDigits: 0 })
    }

    return (safeNum / item.value).toFixed(2) + item.symbol
}