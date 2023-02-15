import { dbContext } from "../db/DbContext"

class GalaxyPlanetsService {
    async getGalaxyPlanets(galaxyId) {
        const planets = await dbContext.Planet
            .find({ galaxyId })
        return planets
    }

}

export const galaxyPlanetsService = new GalaxyPlanetsService()