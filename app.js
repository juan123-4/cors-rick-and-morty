const express= require("express")
const axios = require("axios")
const app=express()
const cors=require("cors")

app.use(cors());

app.get("/character/:name",async(req,res)=>{
    const Name= req.params.name
    
    const url=`https://rickandmortyapi.com/api/character/?name=${Name}
    `

    try {
        const response= await axios.get(url)
        const character = response.data.results[0];
        const {name, image,gender,species,status,origin}=character;
        res.json({name,image,gender,species,status,origin})
    } 
    catch (error) {
        res.status(404).json({error:"persona  no encontrado"})
        
    }

})

app.listen(3000,()=>{
    console.log("el servidor esta escuchando http://localhost:3000")
})