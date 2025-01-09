import {WhyCreateService, WhyDeleteService, WhyReadService, WhyUpdateService} from "../../services/why/WhyService.js";

// Create
export const CreateWhyContent = async (req, res) => {
    const result = await WhyCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateWhyContent = async (req, res) => {
    const result = await WhyUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadWhyContent = async (req, res) => {
    const result = await WhyReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteWhyContent = async (req, res) => {
    const result = await WhyDeleteService(req, res);
    res.json(result);
}