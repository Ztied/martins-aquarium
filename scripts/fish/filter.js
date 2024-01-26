import { getFish } from "../database.js"

const allFish = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const length of allFish) {
        if(length.length % 3 === 0)
        console.log(length)
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = [

    ]
    for (const length of allFish) {
        if(length.length % 5 === 0)
        console.log(length)
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const length of allFish) {
        if(length.length % 3 !== 0 && length.length % 5 !== 0)
        console.log(length)
    }

    return regularFish
}