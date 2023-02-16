import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"


class GalaxyPlanetsService {
    async createPlanet(planetData) {
        const galaxy = await dbContext.Galaxy.findById(planetData.galaxyId)
        if (!galaxy) {
            throw new BadRequest('That Galaxy does not exist')
        }
        const GalaxyPlanet = await dbContext.Planet.create(planetData)
        return GalaxyPlanet
    }


    async getGalaxyPlanets(galaxyId) {
        const planets = await dbContext.Planet
            .find({ galaxyId })
        return planets
    }

}

export const galaxyPlanetsService = new GalaxyPlanetsService()