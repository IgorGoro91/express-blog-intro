
const express = require("express");
const app = express();
const port = 3000;




app.get("api/bacheca", (req,res) => {

    const menu =[
         {  name: "Ciambellone",
            image: "imgs/bacheca/ciambellone.jpeg",
         }
    ]
    res.json(menu)
})


app.listen(port, () =>{
    console.log(`prova del server ${port}`)
})


