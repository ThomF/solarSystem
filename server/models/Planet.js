import { Schema } from "mongoose";

const objectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({

    name: { type: String, required: true, maxLength: 50 },
    biome: { type: String, required: true },
    atmosphere: { type: String, required: true },
    galaxyId: { type: objectId, ref: 'Galaxy' }

    // virtual
}, { timestamps: true, toJSON: { virtuals: true } })