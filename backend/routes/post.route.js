import express from 'express'
import { createPost,editPost,deletePost ,singlePost,getAllPost,getAllPostHome} from '../controllers/post.controller.js'
import {protectedRoute} from '../middleware/protectedRoute.js'
const router=express.Router()


router.post('/createPost',protectedRoute ,createPost)
router.post('/editPost',protectedRoute,editPost)
router.delete('/deletePost',protectedRoute,deletePost)
router.get('/getPost',protectedRoute,singlePost)
router.get('/getAllPost',protectedRoute,getAllPost)
router.get('/getAllPostHome',protectedRoute,getAllPostHome)

// router.get('/categoryPost/:cateogry',categoryPost) //TODO: using_(req.params.category)




// router.post('/upload-blog',upload)














export default router