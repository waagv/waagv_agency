import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import upload from "../app/middlewares/FileUpload.js";

import * as UsersController from '../app/controllers/users/UsersController.js';
import * as HeroController from '../app/controllers/hero/HeroController.js';
import * as AboutController from '../app/controllers/about/AboutController.js';
import * as WhyController from '../app/controllers/why/WhyController.js';
import * as WorkController from '../app/controllers/work/WorkController.js';
import * as TestimonialController from '../app/controllers/testimonial/TestimonialController.js';
import * as TeamController from '../app/controllers/team/TeamController.js';
import * as MindController from '../app/controllers/mind/MindController.js';
import * as AllProjectController from '../app/controllers/allProjects/AllProjectController.js'
import {
    AllProjectImageDelete,
    AllProjectImageUpload,
    DeleteAllProjectContent,
    ReadAllProjectContent,
    UpdateAllProjectContent
} from "../app/controllers/allProjects/AllProjectController.js";


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

// Work Routes
router.post('/CreateWorkContent', AuthMiddleware, WorkController.CreateWorkContent);
router.post('/UpdateWorkContent/:id', AuthMiddleware, WorkController.UpdateWorkContent);
router.get('/ReadWorkContent/:id', AuthMiddleware, WorkController.ReadWorkContent);
router.post('/DeleteWorkContent/:id', AuthMiddleware, WorkController.DeleteWorkContent);
router.post('/WorkImageUpload/:id', AuthMiddleware, upload.single('image') , WorkController.WorkImageUpload);
router.post('/WorkImageDelete/:id/:filename', AuthMiddleware, WorkController.WorkImageDelete);

// Testimonial Routes
router.post('/CreateTestimonialContent', AuthMiddleware, TestimonialController.CreateTestimonialContent);
router.post('/UpdateTestimonialContent/:id', AuthMiddleware, TestimonialController.UpdateTestimonialContent);
router.get('/ReadTestimonialContent/:id', AuthMiddleware, TestimonialController.ReadTestimonialContent);
router.post('/DeleteTestimonialContent/:id', AuthMiddleware, TestimonialController.DeleteTestimonialContent);

// Team Routes
router.post('/CreateTeamContent', AuthMiddleware, TeamController.CreateTeamContent);
router.post('/UpdateTeamContent/:id', AuthMiddleware, TeamController.UpdateTeamContent);
router.get('/ReadTeamContent/:id', AuthMiddleware, TeamController.ReadTeamContent);
router.post('/DeleteTeamContent/:id', AuthMiddleware, TeamController.DeleteTeamContent);
router.post('/TeamImageUpload/:id', AuthMiddleware, upload.single('image') , TeamController.TeamImageUpload);
router.post('/TeamImageDelete/:id/:filename', AuthMiddleware, TeamController.TeamImageDelete);

// Mind Routes
router.post('/CreateMindContent', AuthMiddleware, MindController.CreateMindContent);
router.post('/UpdateMindContent/:id', AuthMiddleware, MindController.UpdateMindContent);
router.get('/ReadMindContent/:id', AuthMiddleware, MindController.ReadMindContent);
router.post('/DeleteMindContent/:id', AuthMiddleware, MindController.DeleteMindContent);

// All Project Routes
router.post('/CreateAllProjectContent', AuthMiddleware, AllProjectController.CreateAllProjectContent);
router.post('/UpdateAllProjectContent/:id', AuthMiddleware, AllProjectController.UpdateAllProjectContent);
router.get('/ReadAllProjectContent/:id', AuthMiddleware, AllProjectController.ReadAllProjectContent);
router.post('/DeleteAllProjectContent/:id', AuthMiddleware, AllProjectController.DeleteAllProjectContent);
router.post('/AllProjectImageUpload/:id', AuthMiddleware, upload.single('image') , AllProjectController.AllProjectImageUpload);
router.post('/AllProjectImageDelete/:id/:filename', AuthMiddleware, AllProjectController.AllProjectImageDelete);


export default router;