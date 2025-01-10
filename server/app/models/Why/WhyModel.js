import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        role: { type: String, default: "admin" },
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        para: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const WhyModel = mongoose.model('why', DataSchema);

export default WhyModel;