import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        role: { type: String, default: "admin" },
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        btn: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const MindModel = mongoose.model('mind', DataSchema);

export default MindModel;