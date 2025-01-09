import {
    AboutCreateService,
    AboutDeleteService,
    AboutReadService,
    AboutUpdateService
} from "../../services/about/AboutService.js";

// Create
export const CreateAboutContent = async (req, res) => {
    const result = await AboutCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateAboutContent = async (req, res) => {
    const result = await AboutUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadAboutContent = async (req, res) => {
    const result = await AboutReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteAboutContent = async (req, res) => {
    const result = await AboutDeleteService(req, res);
    res.json(result);
}