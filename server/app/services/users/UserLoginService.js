import UsersModel from "../../models/UsersModel.js";
import {TokenEncode} from "../../utility/TokenUtility.js";
import bcrypt from "bcrypt";

export const UserLoginService = async (req, res) => {
    try{

        const {email, password} = req.body;

        const data = await UsersModel.aggregate([
            { $match: { email } },
            { $project: { _id:1, email:1, password:1, role:1} },
        ]);

        if(data.length > 0){

            const MatchingPassword = await bcrypt.compare(password, data[0]['password']);

            if(MatchingPassword){

                if(data[0]['role'] === 'admin'){

                    const token = await TokenEncode(data[0]['_id'],data[0]['email'],data[0]['role']);

                    const options = {
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                        httpOnly: true,
                        sameSite: "none",
                        secure: true,
                    };

                    res.cookie('Token', token, options);

                    return{ status: 'success', message: 'Login completed successful!', data: token };

                }else{
                    return{ status: 'fail', message: 'You are not authorized to login! Please contact with authorities!' };
                }

            }else {
                return{ status: 'fail', message: 'Credential Incorrect!' };
            }

        }else{
            return{ status: 'fail', message: 'User not exist!' };
        }
    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}













