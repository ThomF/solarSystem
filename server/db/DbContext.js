import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy';
import { PlanetSchema } from '../models/Planet';
import { FindPlanetSchema } from '../models/FindPlanet';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxy = mongoose.model('Galaxy', GalaxySchema)
  Planet = mongoose.model('Planet', PlanetSchema)
  FindPlanet = mongoose.model('CreatePlanet', FindPlanetSchema)
}

export const dbContext = new DbContext()
