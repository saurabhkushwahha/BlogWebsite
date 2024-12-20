import express from 'express'
import { createPost } from '../controllers/post.controller.js'
const router=express.Router()


router.post('/createPost', createPost)
// router.post('/editPost',editPost)
// router.get('/getAllPost',getAllPost)                //TODO: using  postModel.find({})
// router.get('/getPost/:postId',singlePost)          //TODO: using_ (req.params.postId)
// router.get('/categoryPost/:cateogry',categoryPost) //TODO: using_(req.params.category)




// router.post('/upload-blog',upload)














export default router