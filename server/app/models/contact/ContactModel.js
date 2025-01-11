import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        role: { type: String, default: "admin" },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        number: { type: String, required: true },
        message: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ContactModel = mongoose.model('contact', DataSchema);

export default ContactModel;