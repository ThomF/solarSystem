import { galaxiesServices } from "../services/GalaxiesServices.js"
import { galaxyPlanetsService } from "../services/GalaxyPlanetsService.js"
import BaseController from "../utils/BaseController.js"


export class GalaxiesController extends BaseController {

    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxies)
            .get('/:galaxyId/planets', this.getGalaxyPlanets)

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





}