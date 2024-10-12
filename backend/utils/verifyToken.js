import jwt from 'jsonwebtoken'
const verifyToken = (req,res,next)=>{
    const token=req.cookies.accessToken
    if(!token){
        return res.status(401).json({success:false,message:"your are not authorized"})    
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(401).json({success:false,message:"token is invalid"})   
        }
        req.user=user
        next()
    })
}
export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.if===req.params.id||req.user.rol==='admin'){
            next();
        }else{
            return res.status(403).json({success:false,message:"You are not authenticated"}); 
        }
    });
};
export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.if===req.params.id||req.user.rol==='admin'){
            next()
        }else{
           return res.status(403).json({success:false,message:"You are not authorized"}) 
        }
    });
};