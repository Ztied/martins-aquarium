import { getFish } from './fish/database.js'

const allFish = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const length of allFish) {
        if(length.length % 3 === 0)
        console.log(length)
    }
    console.log(length)
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}