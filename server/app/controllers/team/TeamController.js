import {
    TeamCreateService,
    TeamHeroDeleteService, TeamImageDeleteService, TeamImageUploadService,
    TeamReadService,
    TeamUpdateService
} from "../../services/team/TeamService.js";

// Create
export const CreateTeamContent = async (req, res) => {
    const result = await TeamCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateTeamContent = async (req, res) => {
    const result = await TeamUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadTeamContent = async (req, res) => {
    const result = await TeamReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteTeamContent = async (req, res) => {
    const result = await TeamHeroDeleteService(req, res);
    res.json(result);
}

// Image Upload
export const TeamImageUpload = async (req, res) => {
    const result = await TeamImageUploadService(req, res);
    res.json(result);
}

// Single Image Delete
export const TeamImageDelete = async (req, res) => {
    const result = await TeamImageDeleteService(req, res);
    res.json(result);
}
