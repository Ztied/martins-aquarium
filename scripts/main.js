// Import the FishList function from the correct module
import { FishList } from './fish/fishlist.js'
import { TipList } from './tips/tiplist.js'
import { HarvestLocation} from './locations/location.js'
import { mostHolyFish, soldierFish, nonHolyFish } from './fish/filter.js'


/*
What is the CSS selector for the element where you
want to display the fish?

Use . for elements with a "class" attribute
Use # for elements with an "id" attribute
*/
const locationHTML = HarvestLocation()
const tipListHTML = TipList()
const fishListHTML = FishList()

const parentFishHTMLElement = document.querySelector(".fish-List");
const parentTipHTMLElement = document.querySelector(".tip-list");
const parentHarvestLocationHTMLElement = document.querySelector(".location-list");

parentFishHTMLElement.innerHTML = fishListHTML;
parentTipHTMLElement.innerHTML = tipListHTML;
parentHarvestLocationHTMLElement.innerHTML = locationHTML;

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const holyFish = mostHolyFish()
const soldiersFish = soldierFish()
const unholyFish = nonHolyFish()
console.log(holyFish)
console.log(soldiersFish)
console.log(unholyFish)