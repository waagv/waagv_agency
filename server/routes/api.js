import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as UsersController from '../app/controllers/users/UsersController.js';
import * as HeroController from '../app/controllers/hero/HeroController.js';

// Authentication
router.post('/Registration', UsersController.Registration);
router.post('/Login', UsersController.Login);
router.get('/Details', AuthMiddleware, UsersController.Details);
router.post('/EmailVerify/:email', UsersController.EmailVerify);
router.post('/OtpVerify/:email/:otp', UsersController.OtpVerify);
router.post('/ResetPassword', UsersController.ResetPassword);
router.post('/UpdateProfile', AuthMiddleware, UsersController.UpdateProfile);

// Hero Routes
router.post('/Create', AuthMiddleware, HeroController.Create);


export default router;