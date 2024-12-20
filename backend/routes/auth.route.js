import express from 'express'
import { signup,login,logout, checkAuth } from '../controllers/auth.controller.js';
import {protectedRoute} from '../middleware/protectedRoute.js'
const router= express.Router()


router.post('/signup',signup)
router.post('/login',login)
router.get('/logout',logout)

router.get('/checkAuth',protectedRoute,checkAuth)


export default router;