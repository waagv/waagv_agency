import mongoose from 'mongoose';
import {DEFAULT_IMAGE} from "../../config/config.js";

const DataSchema = new mongoose.Schema(
    {
        role: { type: String, default: "admin" },
        title: { type: String, required: true },
        paragraph: { type: String, required: true },
        btn: { type: String, required: true },
        image: { type: String, default: DEFAULT_IMAGE },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const HeroModel = mongoose.model('hero', DataSchema);

export default HeroModel;