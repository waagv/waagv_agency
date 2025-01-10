import {
    MindCreateService,
    MindDeleteService,
    MindReadService,
    MindUpdateService
} from "../../services/mind/MindService.js";

// Create
export const CreateMindContent = async (req, res) => {
    const result = await MindCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateMindContent = async (req, res) => {
    const result = await MindUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadMindContent = async (req, res) => {
    const result = await MindReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteMindContent = async (req, res) => {
    const result = await MindDeleteService(req, res);
    res.json(result);
}