const asyncHandler= (requestHandler)=> async(res,req,next)=>{
      try {
        await requestHandler(res,req,next);
      } catch (error) {
        next(error)
      }
}

export default asyncHandler