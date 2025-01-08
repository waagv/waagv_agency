import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import upload from "../app/middlewares/FileUpload.js";

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
router.post('/CreateContent', AuthMiddleware, HeroController.CreateContent);
router.post('/UpdateContent/:id', AuthMiddleware, HeroController.UpdateContent);
router.get('/ReadContent/:id', AuthMiddleware, HeroController.ReadContent);
router.post('/DeleteContent/:id', AuthMiddleware, HeroController.DeleteContent);
router.post('/ImageUpload/:id', AuthMiddleware, upload.single('image') , HeroController.ImageUpload);


export default router;