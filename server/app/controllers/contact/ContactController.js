import {MessageService} from "../../services/contact/ContactService.js";

// Create
export const SendMessage = async (req, res) => {
    const result = await MessageService(req, res);
    res.json(result);
}