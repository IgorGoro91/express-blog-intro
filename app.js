
const express = require("express");
const app = express();
const port = 3000;




app.get("api/bacheca", (req,res) => {

    const menu =[
         { Titolo: "prova"}
    ]
    res.json(menu)
})


app.listen(port, () =>{
    console.log(`prova del server ${port}`)
})


