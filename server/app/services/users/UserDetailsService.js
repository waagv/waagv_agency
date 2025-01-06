import {ObjectId} from "mongodb";
import UsersModel from "../../models/UsersModel.js";

export const UserDetailsService = async (req, res) => {
    try{

        const userId = new ObjectId(req.headers['user_id']);

        const data = await UsersModel.aggregate([
            { $match: { _id: userId } },
            { $project: { _id:0, password:0, role:0, createdAt:0, updatedAt:0 } }
        ]);

        return { status: "success", message: "User details have been successfully", data: data };
    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}