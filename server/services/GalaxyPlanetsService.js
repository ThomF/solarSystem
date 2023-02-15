import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"


class GalaxyPlanetsService {
    async createPlanet(planetData) {
        const planet = await dbContext.FindPlanet.findById(planetData.galaxyId)
        if (!planet) {
            throw new BadRequest('No Planet created')
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