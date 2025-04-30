const express = require('express');
const app = express();
const PORT= 3000;

app.use (express.json())

app.get('/' ,(req,res) => {
    res.send ("Hello This !")
})

app.listen(PORT , (req,res) => {
    console.log(`server running on http:localhost:${PORT}`)
})

app.put ('/email' ,(req,res) => {
    const { email , password} = req.body ;
     
    if (!email) {
        return res.status(400).json({Error:"Email not found"})
    }
    if (email) {
        return res.status(201).json({message:"Email already exit"})
    }
    if (!password) {
        return res.status(400).json({Error:"Email not found"})
    }
    if (password) {
        return res.status(201).json({message:"Password already exit"})
    }
})

app.delete ('/email' , (req,res) => {
    const { email } = req.body ;

    if (email) {
        return res.status(201).json({message:"User deleted successfully"})
    
    }
    else{
        return res.status(400).json({Error:"Email not found"})
    }
})