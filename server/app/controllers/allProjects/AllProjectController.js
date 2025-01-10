import {
    AllProjectCreateService, AllProjectDeleteService, AllProjectImageDeleteService, AllProjectImageUploadService,
    AllProjectReadService,
    AllProjectUpdateService
} from "../../services/allProjects/AllProjectService.js";

// Create
export const CreateAllProjectContent = async (req, res) => {
    const result = await AllProjectCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateAllProjectContent = async (req, res) => {
    const result = await AllProjectUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadAllProjectContent = async (req, res) => {
    const result = await AllProjectReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteAllProjectContent = async (req, res) => {
    const result = await AllProjectDeleteService(req, res);
    res.json(result);
}

// Image Upload
export const AllProjectImageUpload = async (req, res) => {
    const result = await AllProjectImageUploadService(req, res);
    res.json(result);
}

// Single Image Delete
export const AllProjectImageDelete = async (req, res) => {
    const result = await AllProjectImageDeleteService(req, res);
    res.json(result);
}