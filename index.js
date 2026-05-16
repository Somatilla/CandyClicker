let candy = document.querySelector(".candies")
let clickerCost = document.querySelector(".clickerCost")
let clickerLevel = document.querySelector(".clickerLevel")
let clickerIncrease = document.querySelector(".clickerIncrease")
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let candyAmount = parseFloat(candy.innerHTML)
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)
let candyPerClick = 1
let candyClickAudio = document.getElementById("candyClickAudio")
let buyUpgradeAudio = document.getElementById("buyUpgradeAudio")
let upgradeContainer = document.getElementById("upgradeContainer")
let upgrades = document.getElementById("upgrades")
let closeUpgradesButton = document.getElementById("closeUpgrades")
let clickerEfficiency = 1
let hardworkingMouseText = document.getElementById("hardworkingMouseText")
let candyPerSecond = 0
 
let CandyTreeCost = document.querySelector(".CandyTreeCost")
let CandyTreeLevel = document.querySelector(".CandyTreeLevel")
let CandyTreeIncrease = document.querySelector(".CandyTreeIncrease")
let parsedCandyTreeCost = parseFloat(CandyTreeCost.innerHTML)
let parsedCandyTreeIncrease = parseFloat(CandyTreeIncrease.innerHTML)
let candyTreeUpgradeText = document.getElementById("TwoTreeText")
let treeEfficiency = 1

//factory
let factoryCost = document.getElementById("factoryCost")
let actualFactoryCost = factoryCost.innerHTML
let parsedfactoryCost = parseFloat(actualFactoryCost)
let factoryLevel = document.getElementById("factoryLevel")
let actualFactoryLevel = factoryLevel.innerHTML
let factoryIncrease = document.getElementById("factoryIncrease")
let actualFactoryIncrease = factoryIncrease.innerHTML
let parsedFactoryIncrease = parseFloat(actualFactoryIncrease)
let factoryCandyPerSecond = 0
let factoryEfficiency = 1

//city
let cityCost = document.getElementById("cityCost")
let actualCityCost = cityCost.innerHTML
let parsedCityCost = parseFloat(actualCityCost)
let cityLevel = document.getElementById("cityLevel")
let actualCityLevel = cityLevel.innerHTML
let cityIncrease = document.getElementById("cityIncrease")
let actualCityIncrease = cityIncrease.innerHTML
let parsedCityIncrease = parseFloat(actualCityIncrease)
let cityCandyPerSecond = 0
let cityEfficiency = 1

candyTreeUpgradeText.classList.add("show")
hardworkingMouseText.classList.add("showHardworkingMouseText")
//let actualCandyPerSecond = 0

function incrementCandy(){
    candyAmount += candyPerClick * clickerEfficiency
    candy.innerHTML = (candyAmount).toFixed(2)
    candyClickAudio.play()
}

function buyClicker() {
    let cost = parseFloat(clickerCost.innerHTML);

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = (candyAmount).toFixed(2)

        clickerLevel.innerHTML++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease

        candyPerClick += parsedClickerIncrease
        parsedClickerCost *= 1.2
        clickerCost.innerHTML = (parsedClickerCost).toFixed(2)
        buyUpgradeAudio.play()
    }
}
function buyCandyTree() {
    let cost = parseFloat(CandyTreeCost.innerHTML);

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = (candyAmount).toFixed(2)

        CandyTreeLevel.innerHTML++

        parsedCandyTreeIncrease = parseFloat((parsedCandyTreeIncrease * 1.03).toFixed(2))
        CandyTreeIncrease.innerHTML = parsedCandyTreeIncrease

        candyPerSecond += parsedCandyTreeIncrease
        parsedCandyTreeCost *= 1.2
        CandyTreeCost.innerHTML = (parsedCandyTreeCost).toFixed(2)
        buyUpgradeAudio.play()
    }
}

function buyFactory() {

    if (candyAmount >= actualFactoryCost) {
        candyAmount -= actualFactoryCost

        candy.innerHTML = (candyAmount).toFixed(2)

        factoryLevel.innerHTML++

        parsedFactoryIncrease = parseFloat((parsedFactoryIncrease * 1.03).toFixed(2))
        factoryIncrease.innerHTML = parsedFactoryIncrease

        factoryCandyPerSecond += parsedFactoryIncrease
        parsedfactoryCost *= 1.2
        factoryCost.innerHTML = (parsedfactoryCost).toFixed(2)
        buyUpgradeAudio.play()
    }
}

function buyCandyCity() {
    if (candyAmount >= parsedCityCost) {
        candyAmount -= parsedCityCost
        candy.innerHTML = candyAmount.toFixed(2)

        cityLevel.innerHTML++

        parsedCityIncrease = parseFloat((parsedCityIncrease * 1.03).toFixed(2))
        cityIncrease.innerHTML = parsedCityIncrease

        cityCandyPerSecond += parsedFactoryIncrease
        parsedCityCost *= 1.2
        parsedCityCost.innerHTML = (parsedCityCost).toFixed(2)
        buyUpgradeAudio.play()
    }
}

function buyHardworkingMouse() {
    let cost = 500

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = (candyAmount).toFixed(2)

        clickerEfficiency = 2

        buyUpgradeAudio.play()
    }
}

function buy2xTrees() {
    let cost = 999

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = candyAmount.toFixed(2)

        treeEfficiency = 2

        buyUpgradeAudio.play()
    }
}

function buy2xFactory() {
    let cost = 2000

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = candyAmount.toFixed(2)

        factoryEfficiency = 2

        buyUpgradeAudio.play()
    }
}


function showUpgrades() {
    upgradeContainer.classList.add("showUpgrades");
}
function hideUpgrades() {
    upgradeContainer.classList.remove("showUpgrades")
}
function showHardworkingMouseText() {
    hardworkingMouseText.classList.remove("showHardworkingMouseText")
}
function hideHardworkingMouseText() {
    hardworkingMouseText.classList.add("showHardworkingMouseText") //Accidentally did it reversed :c
}
function show2xTreesText() {
    candyTreeUpgradeText.classList.remove("show")//Accidentally did it reversed again :cc
}
function hide2xTreesText() {
    candyTreeUpgradeText.classList.add("show")
}
function hide2xFactoryText() {
    TwoFactoryText.classList.remove("show")
}
function show2xFactoryText() {
    TwoFactoryText.classList.add("show")
}

setInterval(() => {
    candyAmount += (candyPerSecond * treeEfficiency) /4
    candyAmount += (factoryCandyPerSecond * factoryEfficiency) /4
    candyAmount += (cityCandyPerSecond * cityEfficiency) /4
    candy.innerHTML = (candyAmount).toFixed(2)
    document.title = (candyAmount).toFixed(0) + " Candy Clicker"
}, 250)

//cps works but its weird
//setInterval(() => {
//    actualCandyPerSecond = 0
//}, 1000)