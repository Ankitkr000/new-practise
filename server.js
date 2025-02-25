const express=require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("working")
})


app.post("/login",(req,res)=>{
    try {
        const {email,password}=req.body

        if(!email){
            return res.status(400).json({error:"Email cannot be empty"})
        }
        if(!password){
            return res.status(400).json({error:"Password cannot be empty"})
        }

        return res.status(200).json({message:"Login successfully"})
        
    } catch (error) {

        return res.status(500).json({error:"Internal server error"})
        
    }
})


app.listen(2000,()=>{{
    console.log("server is running")
}})