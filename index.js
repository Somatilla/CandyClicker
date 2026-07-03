let candy = document.querySelector(".candies")
let clickerCost = document.querySelector(".clickerCost")
let clickerLevel = document.querySelector(".clickerLevel")
let clickerIncrease = document.querySelector(".clickerIncrease")
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let candyAmount = getCandy()
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)
let candyPerClick = 1
let candyClickAudio = document.getElementById("candyClickAudio")
let buyUpgradeAudio = document.getElementById("buyUpgradeAudio")
let upgradeContainer = document.getElementById("upgradeContainer")
let upgrades = document.getElementById("upgrades")
let closeUpgradesButton = document.getElementById("closeUpgrades")
let clickerEfficiency = 1
let hardworkingMouseText = document.getElementById("hardworkingMouseText")

let hasHardworkingMouse
let has2xTree
let has2xFactory

let CandyTreeCost = document.querySelector(".CandyTreeCost")
let CandyTreeLevel = document.querySelector(".CandyTreeLevel")
let CandyTreeIncrease = document.querySelector(".CandyTreeIncrease")
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
let has2xCity = localStorage.getItem("has2xCity") || false

//planet
let planetCost = document.getElementById("planetCost")
let actualPlanetCost = planetCost.innerHTML
let parsedPlanetCost = parseFloat(actualPlanetCost)
let planetLevel = document.getElementById("planetLevel")
let actualPlanetLevel = planetLevel.innerHTML
let planetIncrease = document.getElementById("planetIncrease")
let actualPlanetIncrease = planetIncrease.innerHTML
let parsedPlanetIncrease = parseFloat(actualPlanetIncrease)
let planetCandyPerSecond = 0
let planetEfficiency = 1
let has2xPlanet = localStorage.getItem("has2xPlanet")

//candyGalaxy
let galaxyCost = document.getElementById("galaxyCost")
let actualGalaxyCost = planetCost.innerHTML
let parsedGalaxyCost = parseFloat(actualGalaxyCost)
let galaxyLevel = document.getElementById("galaxyLevel")
let actualGalaxyLevel = galaxyLevel.innerHTML
let galaxyIncrease = document.getElementById("galaxyIncrease")
let actualGalaxyIncrease = galaxyIncrease.innerHTML
let parsedGalaxytIncrease = parseFloat(actualGalaxyIncrease)
let galaxyCandyPerSecond = 0
let galaxyEfficiency = 1
//let has2xGalaxy = localStorage.getItem("has2xPlanet")

candyTreeUpgradeText.classList.add("show")
hardworkingMouseText.classList.add("showHardworkingMouseText")

if ((localStorage.getItem(hasHardworkingMouse) || false) == true) {
    clickerEfficiency = 2
}
if ((localStorage.getItem(has2xTree) || false) == true) {
    treeEfficiency = 2
}
if ((localStorage.getItem(has2xFactory) || false) == true) {
    factoryEfficiency = 2
}

function incrementCandy(){
    candyAmount += candyPerClick * clickerEfficiency
    console.log(candyPerClick * clickerEfficiency)
    candy.innerHTML = format(candyAmount)
    candyClickAudio.play()
}

// ── CLICKER load ────────────────────────────────────────────────
let clickerLocalStorage = getClickerFromLocalStorage()
parsedClickerCost     = parseFloat(clickerLocalStorage["clickerCost"])     || 10
parsedClickerIncrease = parseFloat(clickerLocalStorage["clickerIncrease"]) || 1
candyPerClick         = parseFloat(clickerLocalStorage["candyPerClick"])   || 1

clickerLevel.innerHTML    = parseFloat(clickerLocalStorage["clickerLevel"]) || 0
clickerCost.innerHTML     = parsedClickerCost.toFixed(2)
clickerIncrease.innerHTML = parsedClickerIncrease

function buyClicker() {
    let cost = parseFloat(clickerCost.innerHTML);

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = format(candyAmount)

        clickerLevel.innerHTML++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = format(parsedClickerIncrease)

        candyPerClick += parsedClickerIncrease
        parsedClickerCost *= 1.2
        clickerCost.innerHTML = format(parsedClickerCost)
        buyUpgradeAudio.play()
    }
}

// ── TREE load ─────────────────────────────────────────────────────
let CandyTreeLocalStorage = getTreesFromLocalStorage()
let candyPerSecond = parseFloat(CandyTreeLocalStorage["CandyPerSecond"]) || 1.03
let parsedCandyTreeCost = parseFloat(CandyTreeLocalStorage["CandyTreeCost"]) || 100
let parsedCandyTreeIncrease = parseFloat(CandyTreeLocalStorage["CandyTreeIncrease"]) || 1
let actualCandyTreeCost = CandyTreeCost.innerHTML

CandyTreeLevel.innerHTML    = parseFloat(CandyTreeLocalStorage["CandyTreeLevel"]) || 0
CandyTreeCost.innerHTML     = parsedCandyTreeCost.toFixed(2)
CandyTreeIncrease.innerHTML = parsedCandyTreeIncrease.toFixed(2)

function buyCandyTree() {
    if (candyAmount >= parsedCandyTreeCost) {
        candyAmount -= parsedCandyTreeCost
        candy.innerHTML = format(candyAmount)

        CandyTreeLevel.innerHTML++

        parsedCandyTreeIncrease = parseFloat((parsedCandyTreeIncrease * 1.03).toFixed(2))
        CandyTreeIncrease.innerHTML = parsedCandyTreeIncrease.toFixed(2)
        candyPerSecond += parsedCandyTreeIncrease

        parsedCandyTreeCost *= 1.2
        CandyTreeCost.innerHTML = format(parsedCandyTreeCost)
        buyUpgradeAudio.play()
    }
}

// ── FACTORY load ─────────────────────────────────────────────────
let factoryLocalStorage = getFactoryFromLocalStorage()
factoryCandyPerSecond = parseFloat(factoryLocalStorage["factoryCandyPerSecond"]) || 0
parsedfactoryCost     = parseFloat(factoryLocalStorage["factoryCost"])           || 300
parsedFactoryIncrease = parseFloat(factoryLocalStorage["factoryIncrease"])       || 1
factoryLevel.innerHTML    = parseFloat(factoryLocalStorage["factoryLevel"]) || 0
factoryCost.innerHTML     = parsedfactoryCost.toFixed(2)
factoryIncrease.innerHTML = parsedFactoryIncrease

function buyFactory() {

    if (candyAmount >= actualFactoryCost) {

        candyAmount -= actualFactoryCost
        candy.innerHTML = format(candyAmount)

        factoryLevel.innerHTML++

        //stuff that is very important
        parsedFactoryIncrease = parseFloat((parsedFactoryIncrease * 1.08).toFixed(2))
        factoryIncrease.innerHTML = format(parsedFactoryIncrease)
        factoryCandyPerSecond += parsedFactoryIncrease

        //cost
        parsedfactoryCost *= 1.2
        factoryCost.innerHTML = format(parsedfactoryCost)
        console.log(actualFactoryCost)
        buyUpgradeAudio.play()
    }
}

// ── CITY load ───────────────────────────────────────────────────
let cityLocalStorage = getCityFromLocalStorage()
parsedCityCost     = parseFloat(cityLocalStorage["cityCost"])     || 500
parsedCityIncrease = parseFloat(cityLocalStorage["cityIncrease"]) || 1
cityCandyPerSecond = parseFloat(cityLocalStorage["cityCandyPerSecond"]) || 0

cityLevel.innerHTML    = parseFloat(cityLocalStorage["cityLevel"]) || 0
cityCost.innerHTML     = parsedCityCost.toFixed(2)
cityIncrease.innerHTML = parsedCityIncrease

function buyCandyCity() {
    if (candyAmount >= parsedCityCost) {
        candyAmount -= parsedCityCost
        candy.innerHTML = format(candyAmount)

        cityLevel.innerHTML++

        parsedCityIncrease = parseFloat((parsedCityIncrease * 1.2).toFixed(2))
        cityIncrease.innerHTML = format(parsedCityIncrease)

        cityCandyPerSecond += parsedCityIncrease
        parsedCityCost *= 1.2
        cityCost.innerHTML = format(parsedCityCost)
        buyUpgradeAudio.play()
    }
}

// PLANET LOAD
let planetLocalStorage = getPlanetFromLocalStorage()
parsedPlanetCost     = parseFloat(planetLocalStorage["planetCost"])     || 1000
parsedPlanetIncrease = parseFloat(planetLocalStorage["planetIncrease"]) || 1
planetCandyPerSecond = parseFloat(planetLocalStorage["planetCandyPerSecond"]) || 0

planetLevel.innerHTML    = parseFloat(planetLocalStorage["planetLevel"]) || 0
planetCost.innerHTML     = parsedPlanetCost.toFixed(2)
planetIncrease.innerHTML = parsedPlanetIncrease

function buyCandyPlanet() {

    if (candyAmount >= parsedPlanetCost) {
        candyAmount -= parsedPlanetCost
        candy.innerHTML = format(candyAmount)

        planetLevel.innerHTML++

        parsedPlanetIncrease = parseFloat((parsedPlanetIncrease * 1.35).toFixed(2))
        planetIncrease.innerHTML = format(parsedPlanetIncrease)

        planetCandyPerSecond += parsedPlanetIncrease
        parsedPlanetCost *= 1.3
        planetCost.innerHTML = format(parsedPlanetCost)
        buyUpgradeAudio.play()
    }
}

// GALAXY LOAD
let galaxyLocalStorage = getGalaxyFromLocalStorage()
parsedGalaxyCost     = parseFloat(galaxyLocalStorage["galaxyCost"])     || 10000
parsedGalaxytIncrease = parseFloat(galaxyLocalStorage["galaxyIncrease"]) || 1
galaxyCandyPerSecond = parseFloat(galaxyLocalStorage["galaxyCandyPerSecond"]) || 0

galaxyLevel.innerHTML    = parseFloat(galaxyLocalStorage[galaxyLevel]) || 0
galaxyCost.innerHTML     = format(parsedGalaxyCost)
galaxyIncrease.innerHTML = parsedGalaxytIncrease

function buyCandyGalaxy() {

    if (candyAmount >= parsedGalaxyCost) {
        candyAmount -= parsedGalaxyCost
        candy.innerHTML = format(candyAmount)

        galaxyLevel.innerHTML++

        parsedGalaxytIncrease = parseFloat((parsedGalaxytIncrease * 1.35).toFixed(2))
        galaxyIncrease.innerHTML = format(parsedGalaxytIncrease)

        galaxyCandyPerSecond += parsedGalaxytIncrease
        parsedGalaxyCost *= 1.3
        galaxyCost.innerHTML = format(parsedGalaxyCost)
        buyUpgradeAudio.play()
    }
}

if (hasHardworkingMouse) {clickerEfficiency = 2}
function buyHardworkingMouse() {
    let cost = 500

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = format(candyAmount)

        clickerEfficiency = 2

        hasHardworkingMouse = true
        localStorage.setItem("hasHardworkingMouse", hasHardworkingMouse)
        buyUpgradeAudio.play()
    }
}
if (has2xTree) {treeEfficiency = 2}
function buy2xTrees() {
    let cost = 999

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = format(candyAmount)

        treeEfficiency = 2
        has2xTree = true
        localStorage.setItem("has2xTree", has2xTree)

        buyUpgradeAudio.play()
    }
}
if (has2xFactory) {factoryEfficiency = 2}
function buy2xFactory() {
    let cost = 2000

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = format(candyAmount)

        factoryEfficiency = 2
        has2xFactory = true
        localStorage.setItem("has2xFactory", has2xFactory)

        buyUpgradeAudio.play()
    }
}
if (has2xCity) {cityEfficiency = 2}
function buy2xCity() {
    let cost = 7000

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = format(candyAmount)

        cityEfficiency = 2
        has2xCity = true
        localStorage.setItem("has2xCity", has2xCity)

        buyUpgradeAudio.play()
    }
}

if (has2xPlanet) {planetEfficiency = 2}
function buy2xPlanet() {
    let cost = 15000

    if (candyAmount >= cost) {
        candyAmount -= cost
        candy.innerHTML = format(candyAmount)

        planetEfficiency = 2
        has2xPlanet = true
        localStorage.setItem("has2xPlanet", has2xPlanet)

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
let twoCityText = document.getElementById("TwoCityText")

function hide2xCityText() {
    twoCityText.classList.remove("show")
}
function show2xCityText() {
    twoCityText.classList.add("show")
}
let twoPlanetText = document.getElementById("TwoPlanetText")

function show2xPlanetText() {
    twoPlanetText.classList.add("show")
}
function hide2xPlanetText() {
    twoPlanetText.classList.remove("show")
}

setInterval(() => {
    candyAmount += (candyPerSecond * treeEfficiency) /4
    candyAmount += (factoryCandyPerSecond * factoryEfficiency) /4
    candyAmount += (cityCandyPerSecond * cityEfficiency) /4
    candyAmount += (planetCandyPerSecond * planetEfficiency) /4
    candy.innerHTML = format(candyAmount)
    document.title = format(candyAmount) + " Candy Clicker"
    saveCandyToLocalStorage()
    saveFactoryToLocalStorage()
    saveTreesToLocalStorage()
    saveClickerToLocalStorage()
    saveCityToLocalStorage()
    savePlanetToLocalStorage()
    saveGalaxyToLocalStorage()
}, 250)

//Local save

const saveCandyToLocalStorage = () => {
    localStorage.setItem("Candies", candyAmount)
}
function getCandy() {
    candies = localStorage.getItem("Candies") || 500
    candies = parseFloat(candies)
    return candies
    console.log("gotcandy:"+  candies )
}

function saveTreesToLocalStorage() {
    localStorage.setItem("CandyPerSecond", candyPerSecond)
    localStorage.setItem("CandyTreeCost", parsedCandyTreeCost)
    localStorage.setItem("CandyTreeIncrease", parsedCandyTreeIncrease)
    localStorage.setItem("CandyTreeLevel", CandyTreeLevel.innerHTML)
}
function getTreesFromLocalStorage() {
    return {
        CandyPerSecond: localStorage.getItem("CandyPerSecond"),
        CandyTreeCost: localStorage.getItem("CandyTreeCost"),
        CandyTreeIncrease: localStorage.getItem("CandyTreeIncrease"),
        CandyTreeLevel: localStorage.getItem("CandyTreeLevel")
    }
}

function saveFactoryToLocalStorage() {
    localStorage.setItem("factoryCandyPerSecond", factoryCandyPerSecond)
    localStorage.setItem("factoryCost", parsedfactoryCost)
    localStorage.setItem("factoryIncrease", parsedFactoryIncrease)
    localStorage.setItem("factoryLevel", factoryLevel.innerHTML)
}
function getFactoryFromLocalStorage() {
    return {
        CandyPerSecond: localStorage.getItem("factoryCandyPerSecond"),
        CandyTreeCost: localStorage.getItem("factoryCost"),
        CandyTreeIncrease: localStorage.getItem("factoryIncrease"),
        CandyTreeLevel: localStorage.getItem("factoryLevel")
    }
}
function saveClickerToLocalStorage() {
    localStorage.setItem("clickerCost",     parsedClickerCost)
    localStorage.setItem("clickerIncrease", parsedClickerIncrease)
    localStorage.setItem("clickerLevel",    clickerLevel.innerHTML)
    localStorage.setItem("candyPerClick",   candyPerClick)
}
function getClickerFromLocalStorage() {
    return {
        clickerCost:     localStorage.getItem("clickerCost"),
        clickerIncrease: localStorage.getItem("clickerIncrease"),
        clickerLevel:    localStorage.getItem("clickerLevel"),
        candyPerClick:   localStorage.getItem("candyPerClick")
    }
}
function saveCityToLocalStorage() {
    localStorage.setItem("cityCandyPerSecond", cityCandyPerSecond)
    localStorage.setItem("cityCost",           parsedCityCost)
    localStorage.setItem("cityIncrease",       parsedCityIncrease)
    localStorage.setItem("cityLevel",          cityLevel.innerHTML)
}
function getCityFromLocalStorage() {
    return {
        cityCandyPerSecond: localStorage.getItem("cityCandyPerSecond"),
        cityCost:           localStorage.getItem("cityCost"),
        cityIncrease:       localStorage.getItem("cityIncrease"),
        cityLevel:          localStorage.getItem("cityLevel")
    }
}
function savePlanetToLocalStorage() {
    localStorage.setItem("planetCandyPerSecond", planetCandyPerSecond)
    localStorage.setItem("planetCost",           parsedPlanetCost)
    localStorage.setItem("planetIncrease",       parsedPlanetIncrease)
    localStorage.setItem("planetLevel",          planetLevel.innerHTML)
}
function getPlanetFromLocalStorage() {
    return {
        planetCandyPerSecond: localStorage.getItem("planetCandyPerSecond"),
        planetCost:           localStorage.getItem("planetCost"),
        planetIncrease:       localStorage.getItem("planetIncrease"),
        planetLevel:          localStorage.getItem("planetLevel")
    }
}
function saveGalaxyToLocalStorage() {
    localStorage.setItem("galaxyCandyPerSecond", galaxyCandyPerSecond)
    localStorage.setItem("galaxyCost",           parsedGalaxyCost)
    localStorage.setItem("galaxyIncrease",       parsedGalaxytIncrease)
    localStorage.setItem("galaxyLevel",          galaxyLevel.innerHTML)
}
function getGalaxyFromLocalStorage() {
    return {
        galaxyCandyPerSecond: localStorage.getItem("galaxyCandyPerSecond"),
        galaxyCost:           localStorage.getItem("galaxyCost"),
        galaxyIncrease:       localStorage.getItem("galaxyIncrease"),
        galaxyLevel:          localStorage.getItem("galaxyLevel")
    }
}

let plusCandies = 0
function fall1Spawn(src) {
    const area = document.getElementById("fallOverlay")
    const img = document.createElement("img")
    if(RNGCandyType == 1){
        plusCandies += 1 * TimesYellowCandyClicked
        const h2 = document.querySelector(".CandyRainText")
        h2.innerHTML = plusCandies + " candies!"
    }
    img.src = src || "assets/Candy.png"
    img.classList.add("fall1")
    img.style.left = Math.random() * 100 + "%"
    img.style.top = Math.random() * 15 + "%"
    img.style.setProperty("--rotation", `${Math.random() * 360}deg`)
    area.appendChild(img);
    img.addEventListener("animationend", () => {
        img.remove();
    });
}


function RNGCandySpawn(src,type) {
    const area = document.getElementById("clickOverlay")
    area.classList.add("show")

    const img = document.createElement("img")
    img.src = src || "assets/Candy.png"
    img.classList.add("RNGCandy")
    img.style.left = Math.random() * 100 + "%"
    img.style.top = Math.random() * 100 + "%"

    area.appendChild(img);
}
let RNGCandyType
setInterval(() => {
    let rng = Math.random()
    let RNGCandyAsset
    console.log("uasd")
    if(rng > 0.5){
        if (document.querySelector(".RNGCandy") == null) {
            rng2 = Math.random() * 10
            console.log(rng2)
            if (rng2 < 2.5) {
                RNGCandyType = 1 //yellow
                RNGCandyAsset = "assets/yellowCandy.png"
                console.log("yellow")
            }
            else if(rng2 < 4 && 2.5 < rng2) {
                RNGCandyType = 2
                RNGCandyAsset = "assets/purpleCandy.png"
                console.log("purple")
            }
            else if (rng2 < 6.5 && rng2 > 4) {
                RNGCandyType = 3
                RNGCandyAsset = "assets/greenCandy.png"
                console.log("green")
            }
            else{
                RNGCandyType = 4
                RNGCandyAsset = "assets/blueCandy.png"
                console.log("blue")
            }
           RNGCandySpawn(RNGCandyAsset, RNGCandyType)
          const RNGCandy = document.querySelector(".RNGCandy")
          setTimeout(() => {
            RNGCandy.remove()
            const area = document.getElementById("clickOverlay")
            area.classList.remove("show")
        }, 5000)
        }
    }
},200000)

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

let TimesYellowCandyClicked = parseFloat(localStorage.getItem("TimesYellowCandyClicked") || 1)

let timesBlueCandyClicked = localStorage.getItem("timesBlueCandyClicked") || 1
let plusCandiesFromBlueCandy = 200
async function RNGCandyClicked(RNGCandy) {
    const area = document.getElementById("clickOverlay")

    if(RNGCandyType == 1) {
        const h2 = document.createElement("h2")
        h2.classList.add("CandyRainText")
        area.appendChild(h2)
        area.classList.remove("show")
        RNGCandy.remove()
        plusCandies = 0
        for (let i = 0; i < 100; i++) {
            fall1Spawn("assets/yellowCandy.png")
            await sleep(30)
        }
        TimesYellowCandyClicked += 1
        await sleep(40)
        h2.remove()
        candyAmount += plusCandies
        candy.innerHTML = format(candyAmount)
        localStorage.setItem("TimesYellowCandyClicked",  TimesYellowCandyClicked)
    }
    else if (RNGCandyType == 4) {
        blueCandy = document.querySelector(".RNGCandy")
        blueCandy.classList.add("BlueCandy")
        blueCandyRect = blueCandy.getBoundingClientRect()
        blueCandyPosX = blueCandyRect.left
        blueCandyPosY = blueCandyRect.top
        
        area.classList.remove("show")
        RNGCandy.remove()

        blueCandyH2 = document.createElement("h2")
        blueCandyH2.classList.add("BlueCandyH2")
        blueCandyH2.style.left = blueCandyPosX + "px"
        blueCandyH2.style.top = blueCandyPosY + "px"
        blueCandyH2.innerHTML = "+ " + timesBlueCandyClicked * 200 + " candies!"
        candyAmount += timesBlueCandyClicked * 200
        candy.innerHTML = format(candyAmount)
        localStorage.setItem("timesBlueCandyClicked", timesBlueCandyClicked)
        area.appendChild(blueCandyH2)
        await sleep(500)
        blueCandyH2.remove()

    }
    else if (RNGCandyType == 2) {
        purpleCandy = document.querySelector(".RNGCandy")
        purpleCandy.classList.add("purpleCandy")
        purpleCandyRect = purpleCandy.getBoundingClientRect()
        purpleCandyPosX = blueCandyRect.left
        purpleCandyPosY = blueCandyRect.top

        area.classList.remove("show")
        RNGCandy.remove()

        purpleCandyH2 = document.createElement("h2")
        purpleCandyH2.classList.add("purpleCandyH2")
        purpleCandyH2.style.left = purpleCandyPosX + "px"
        purpleCandyH2.style.top = purpleCandyPosY + "px"
        purpleCandyH2.innerHTML = "- 300 candies!"
        candyAmount -= 300
        if(candyAmount < 0) {
            candyAmount = 0
        }
        candy.innerHTML = format(candyAmount)
        area.appendChild(purpleCandyH2)
        await sleep(500)
        purpleCandyH2.remove()

    }
    else if(RNGCandyType == 3) {
        area.classList.remove("show")
        RNGCandy.remove()
        cityEfficiency += 0.5
        factoryEfficiency += 0.5
        treeEfficiency += 0.5
        clickerEfficiency += 0.5

        area.classList.remove("show")
        RNGCandy.remove()

        setTimeout(() => {
            cityEfficiency -= 0.5
        factoryEfficiency -= 0.5
        treeEfficiency -= 0.5
        clickerEfficiency -= 0.5
        }, 10000)

        for (let i = 0; i < 100; i++) {
            fall1Spawn("assets/greenCandy.png")
            await sleep(300)
        }
    }
    area.classList.remove("show")
    RNGCandy.remove()
}

let clickOverlay = document.getElementById("clickOverlay")

clickOverlay.addEventListener("click", (e) => {
  if (e.target.matches(".RNGCandy")) {
    RNGCandyClicked(document.querySelector(".RNGCandy"))
  }
});