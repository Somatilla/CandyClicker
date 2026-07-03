function applyPurchase(candyAmount, currentCost, costMultiplier) {
    if (candyAmount < currentCost) {
        return null
    }

    return {
        candyAmount: candyAmount - currentCost,
        nextCost: currentCost * costMultiplier
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { applyPurchase }
}

if (typeof window !== 'undefined') {
    window.applyPurchase = applyPurchase
}
