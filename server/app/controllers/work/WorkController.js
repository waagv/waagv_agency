import {
    WorkCreateService, WorkDeleteService,
     WorkImageDeleteService, WorkImageUploadService,
    WorkReadService,
    WorkUpdateService
} from "../../services/work/WorkService.js";

// Create
export const CreateWorkContent = async (req, res) => {
    const result = await WorkCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateWorkContent = async (req, res) => {
    const result = await WorkUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadWorkContent = async (req, res) => {
    const result = await WorkReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteWorkContent = async (req, res) => {
    const result = await WorkDeleteService(req, res);
    res.json(result);
}

// Image Upload
export const WorkImageUpload = async (req, res) => {
    const result = await WorkImageUploadService(req, res);
    res.json(result);
}

// Single Image Delete
export const WorkImageDelete = async (req, res) => {
    const result = await WorkImageDeleteService(req, res);
    res.json(result);
}
