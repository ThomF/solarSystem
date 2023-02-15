import { Schema } from "mongoose";

const objectId = Schema.Types.ObjectId

export const FindPlanetSchema = new Schema({

    name: { type: String, required: true, maxLength: 50 },
    galaxyId: { type: objectId, ref: 'Galaxy' }

    // virtual
}, { timestamps: true, toJSON: { virtuals: true } })