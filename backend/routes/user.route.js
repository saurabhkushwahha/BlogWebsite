import express from 'express'
import { editProfile } from '../controllers/user.controller.js'
import { protectedRoute } from '../middleware/protectedRoute.js'
const router= express.Router()

router.post('/editProfile',protectedRoute,editProfile)



export default router