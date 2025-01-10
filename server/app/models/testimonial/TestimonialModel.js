import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        role: { type: String, default: "admin" },
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        comment: { type: String, required: true },
        clientName: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const TestimonialModel = mongoose.model('testimonial', DataSchema);

export default TestimonialModel;