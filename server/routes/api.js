import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as UsersController from '../app/controllers/users/UsersController.js';
import {Details, EmailVerify, Login, Registration} from "../app/controllers/users/UsersController.js";

// Registration
router.post('/Registration', UsersController.Registration);
router.post('/Login', UsersController.Login);
router.get('/Details', AuthMiddleware, UsersController.Details);
router.post('/EmailVerify/:email', AuthMiddleware, UsersController.EmailVerify);

export default router;