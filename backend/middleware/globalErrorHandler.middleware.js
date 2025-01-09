const devError=(res,err)=>{
     return res.status(err.statusCode).json({
           status:err.statusCode,
           message:err.message,
           stackTrace:err.stack,
           error:err,
     });
};

const prodError=(res,err)=>{
   if(err.isOperational){
      return res.status(err.statusCode).json({status:err.statusCode, message:err.message})
   }
   else{
    return res.status(err.statusCode).json({status:'error',message:'something went wrong.Please try again!'})
   }

};

const globalErrorHandler=(err,req,res,next)=>{
         err.statusCode= err.statusCode || 500;
         err.status= err.status || "error";
    if(process.env.NODE_ENV==="development"){
       devError(res,err);
    }else if(process.env.NODE_ENV==="production"){
       prodError(res,err);
    }
    else{
       res.status(500).json({message:"NODE_ENV ERROR!!"})
    }

};