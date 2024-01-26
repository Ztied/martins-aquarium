import { tips } from "../database.js";

export const TipList = () => {
    const tip = tips()

    let htmlString = '<article><div class="tip__list">'

    for(const fullTip of tip) {

        htmlString += `<section class="tip__card">
        <div class= "tip__location">
        <div class= "tip__inall">
        <div class= "tip__title">${fullTip.title}</div>
        <div class= "tip__description">${fullTip.description}</div>
        </div>     
        </div>
        </section>
    `
    }
        htmlString += `</div></article>`
        return htmlString
}