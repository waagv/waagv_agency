import {RegistrationService} from "../../services/users/UserCreateService.js";
import {UserLoginService} from "../../services/users/UserLoginService.js";
import {UserDetailsService} from "../../services/users/UserDetailsService.js";
import {UserEmailService} from "../../services/users/UserEmailService.js";
import {UserResetPasswordService} from "../../services/users/UserResetPasswordService.js";
import {UserVerifyOtpService} from "../../services/users/UserVerifyOtpService.js";
import {UserUpdateService} from "../../services/users/UserUpdateService.js";

// Registration
export const Registration = async (req, res) => {
    const result = await RegistrationService(req, res);
    res.json(result);
}

// Login
export const Login = async (req, res) => {
    const result = await UserLoginService(req, res);
    res.json(result);
}

// Details
export const Details = async (req, res) => {
    const result = await UserDetailsService(req, res);
    res.json(result);
}

// Email Verify
export const EmailVerify = async (req, res) => {
    const result = await UserEmailService(req, res);
    res.json(result);
}

// Otp Verify
export const OtpVerify = async (req, res) => {
    const result = await UserVerifyOtpService(req, res);
    res.json(result);
}

// Reset Password
export const ResetPassword = async (req, res) => {
    const result = await UserResetPasswordService(req, res);
    res.json(result);
}

// User Update
export const UpdateProfile = async (req, res) => {
    const result = await UserUpdateService(req, res);
    res.json(result);
}



























