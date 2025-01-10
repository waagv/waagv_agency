import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import upload from "../app/middlewares/FileUpload.js";

import * as UsersController from '../app/controllers/users/UsersController.js';
import * as HeroController from '../app/controllers/hero/HeroController.js';
import * as AboutController from '../app/controllers/about/AboutController.js';
import * as WhyController from '../app/controllers/why/WhyController.js';
import {WhyUpdateService} from "../app/services/why/WhyService.js";
import {DeleteWhyContent, ReadWhyContent, UpdateWhyContent} from "../app/controllers/why/WhyController.js";

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
router.post('/ImageDelete/:id/:filename', AuthMiddleware, HeroController.ImageDelete);

// About Routes
router.post('/CreateAboutContent', AuthMiddleware, AboutController.CreateAboutContent);
router.post('/UpdateAboutContent/:id', AuthMiddleware, AboutController.UpdateAboutContent);
router.get('/ReadAboutContent/:id', AuthMiddleware, AboutController.ReadAboutContent);
router.post('/DeleteAboutContent/:id', AuthMiddleware, AboutController.DeleteAboutContent);

// Why Routes
router.post('/CreateWhyContent', AuthMiddleware, WhyController.CreateWhyContent);
router.post('/UpdateWhyContent/:id', AuthMiddleware, WhyController.UpdateWhyContent);
router.get('/ReadWhyContent/:id', AuthMiddleware, WhyController.ReadWhyContent);
router.post('/DeleteWhyContent/:id', AuthMiddleware, WhyController.DeleteWhyContent);


export default router;