import {ObjectId} from "mongodb";
import UsersModel from "../../models/UsersModel.js";

export const UserEmailService = async (req, res) => {
    try{

        const email = req.params['email'];
        const OtpCode = Math.floor(100000 + Math.random() * 900000);

        return { status: "success", message: "Otp sent to your email. Please check your email!", data: email };
    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}