const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

const { MongoClient } = require("mongodb");

const url = "mongodb+srv://snehacreative2016:R31QPHwo5q9CT077@contactusdatabase.souf2cj.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

app.post('/createUser', async(req, res) => {
let user = {
        name: req.body.name,
        email: req.body.email,
            
    }

try {

    await client.connect();
        console.log("Connected correctly to server");
    
         const db = client.db("Contacts");
         const col= db.collection("Peoples");

   
    

    const insertUser = await col.insertOne(user);
    // console.log("Success")

    res.status(200).json({msg:"success",data:user});
        
    } catch (error) {

        res.status(500).send(error)
        //console.log(error);
        
    }
    
    
})

app.listen(8000, () => {
  console.log('Example app listening on port 3000!');
});