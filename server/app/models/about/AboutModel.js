import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        role: { type: String, default: "admin" },
        title: { type: String, required: true },
        para1: { type: String, required: true },
        para2: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const AboutModel = mongoose.model('about', DataSchema);

export default AboutModel;