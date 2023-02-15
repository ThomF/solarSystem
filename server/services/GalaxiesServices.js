import { dbContext } from "../db/DbContext"


class GalaxiesServices {
    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxy.create(galaxyData)
        return galaxy

    }
    async getGalaxies() {
        const galaxy = await dbContext.Galaxy.find()
        return galaxy
    }

}








export const galaxiesServices = new GalaxiesServices()