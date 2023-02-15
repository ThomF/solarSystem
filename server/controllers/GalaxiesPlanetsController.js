import { galaxyPlanetsService } from "../services/GalaxyPlanetsService";
import BaseController from "../utils/BaseController";

export class GalaxiesPlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .post('', this.createPlanet)
    }
    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const planet = await galaxyPlanetsService.createPlanet(planetData)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }



}