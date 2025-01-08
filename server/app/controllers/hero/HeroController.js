import {HeroCreateService} from "../../services/hero/HeroService.js";

// Create
export const Create = async (req, res) => {
    const result = await HeroCreateService(req, res);
    res.json(result);
}