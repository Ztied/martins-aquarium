import { location } from "../database.js";

export const HarvestLocation = () => {
    const allLocations = location()

    let htmlString = '<article><div class="location__list">'

    for(const locations of allLocations) {

        htmlString += `<section class="location__card">
        
        <div class= "total__location">
        <div class= "location__name">${locations.name}</div>
        <div class= "location__description">${locations.description}</div>
        <div class= "location__fishtypes">${locations.fishTypes}</div>
        <div class= "location__accessibility">${locations.accessibility}</div>    
        
        </div>
        </section>
    `
    }
        htmlString += `</div></article>`
        return htmlString
}
    
