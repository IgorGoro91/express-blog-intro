
const express = require('express');
const app = express();
const port = 4000;


app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('prova server')
})

app.get('/api/bacheca', (req,res) => {

    const menu =[
         {  name: "Ciambellone",
            image: "imgs/ciambellone.jpeg",
         }
    ]
    res.json(menu)
})


app.listen(port, () =>{
    console.log(`prova del server ${port}`)
})


