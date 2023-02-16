import { galaxiesServices } from "../services/GalaxiesServices.js"
import { galaxyPlanetsService } from "../services/GalaxyPlanetsService.js"
import BaseController from "../utils/BaseController.js"


export class GalaxiesController extends BaseController {

    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxies)
            // PLANETS \\
            .get('/:galaxyId/planets', this.getGalaxyPlanets)
            .post('/:galaxyId/planets', this.createPlanet)


    }
    async getGalaxyPlanets(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const galaxyPlanets = await galaxyPlanetsService.getGalaxyPlanets(galaxyId)
            return res.send(galaxyPlanets)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxies(req, res, next) {
        try {
            let galaxyData = req.body
            let galaxy = await galaxiesServices.createGalaxy(galaxyData)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }


    async getGalaxies(req, res, next) {
        try {
            let galaxies = await galaxiesServices.getGalaxies()
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }


    // PLANET TINGS \\

    async createPlanet(req, res, next) {
        try {
            let planetBody = req.body
            planetBody.galaxyId = req.params.galaxyId
            let planet = await galaxyPlanetsService.createPlanet(planetBody)
            return res.send(planet)
        } catch (error) {

        }
    }


}