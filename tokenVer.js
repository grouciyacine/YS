import jwt from 'jsonwebtoken'

export const verify=(req,res,next)=>{

//const token=req.cookies.access_token;
const auth=req.headers.authorization
if(auth){
    const token=auth.split(" ")[1]
//const auth=req.headers.authorization

//const token= req.headers.access_token

if(!token) return res.status(500).json('error token not exist')
jwt.verify(token,process.env.JWT,(err,user)=>{
    if(err) return res.status(500).json('err user not exist')
    req.user=user
    next()
})
}


}
