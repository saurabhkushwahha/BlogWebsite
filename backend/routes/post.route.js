import express from 'express'
import { createPost ,singlePost,getAllPost} from '../controllers/post.controller.js'
import {protectedRoute} from '../middleware/protectedRoute.js'
const router=express.Router()


router.post('/createPost',protectedRoute ,createPost)
router.get('/getPost/:id',protectedRoute,singlePost)
router.get('/getAllPost',getAllPost)
// router.post('/editPost',editPost)
// router.get('/categoryPost/:cateogry',categoryPost) //TODO: using_(req.params.category)




// router.post('/upload-blog',upload)














export default router