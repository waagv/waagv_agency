import mongoose from 'mongoose';
import {DEFAULT_IMAGE} from "../../config/config.js";

const DataSchema = new mongoose.Schema(
    {
        role: { type: String, default: "admin" },
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        image: { type: String, default: DEFAULT_IMAGE },
        projectTitle: { type: String, required: true },
        liveDemoLink: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const AllProjectModel = mongoose.model('allProject', DataSchema);

export default AllProjectModel;