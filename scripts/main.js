// Import the FishList function from the correct module
import { FishList } from './fish/fishlist.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishListHTML = FishList()
const parentHTMLElement = document.querySelector(".fish-List")

parentHTMLElement.innerHTML = fishListHTML


import { getFish } from './fish/database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}