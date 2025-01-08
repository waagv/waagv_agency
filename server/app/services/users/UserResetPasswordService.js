import bcrypt from "bcrypt";
import OtpModel from "../../models/user/OtpModel.js";
import UsersModel from "../../models/user/UsersModel.js";

export const UserResetPasswordService = async (req, res) => {
    try{

        const { email, newPassword, otp } = req.body;
        const EncryptedPassword = await bcrypt.hash(newPassword, 10);
        const statusUpdate = 1;

        const otpUserCount = await OtpModel.aggregate([
            { $match: { email: email, otp: otp, status: statusUpdate } },
            { $count: "total" }
        ]);

        if(otpUserCount.length > 0){

            await UsersModel.updateOne({email: email}, {password: EncryptedPassword});
            await OtpModel.deleteOne({email: email});
            return { status: 'success', message: 'Password reset successfully' };

        }else{
            return { status: 'fail', message: 'Invalid request!' };
        }

    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}