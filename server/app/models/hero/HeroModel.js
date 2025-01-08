import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        paragraph: { type: String, required: true },
        btn: { type: String, required: true },
        image: { type: String}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const HeroModel = mongoose.model('hero', DataSchema);

export default HeroModel;