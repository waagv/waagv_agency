import {
    HeroCreateService,
    HeroDeleteService, HeroImageUploadService,
    HeroReadService,
    HeroUpdateService
} from "../../services/hero/HeroService.js";

// Create
export const CreateContent = async (req, res) => {
    const result = await HeroCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateContent = async (req, res) => {
    const result = await HeroUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadContent = async (req, res) => {
    const result = await HeroReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteContent = async (req, res) => {
    const result = await HeroDeleteService(req, res);
    res.json(result);
}

// Image Upload
export const ImageUpload = async (req, res) => {
    const result = await HeroImageUploadService(req, res);
    res.json(result);
}

























