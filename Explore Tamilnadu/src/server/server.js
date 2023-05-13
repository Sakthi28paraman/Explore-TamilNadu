const app = require('express')();
const multer = require('multer');
const mongoose = require('mongoose');

const upload = multer({dest:'uploads/'})


mongoose.connect('mongodb://0.0.0.0:27017/FSDProject');

const DetailSchema = new mongoose.Schema({
    name : String,
    city: String,
    description : String,
    imagename:String,
    imagepath:String
},{collection:'TamilNadu'})

const Detail  = mongoose.model('Detail',DetailSchema);

app.get('/map', (req, res) => {
  res.send('You have reached the /map route');
});


app.post('/api/adddetails',upload.single('image'),async (req,res)=>{
    try{
        const {name,city,description} = req.body;
        const {filename,filepath} = req.file;

        const detail = new Detail({
            name: name,
            city:city,
            description:description,
            imagename:filename,
            imagepath : filepath
        });
        await detail.save();
        res.status(200);
        console.log("The data is added to the db");
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})

app.get('/api/details',async(req,res)=>{
    try {
        const { city } = req.query;
        let details;
    
        if (city) {
          details = await Detail.find({ city: city });
        } else {
          details = await Detail.find();
        }
        details.forEach((detail) => {
            if (detail.imagepath) {
              detail.imagepath = detail.imagepath.toString('base64');
            }
          });
        res.json(details);
      }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
})


app.listen(3000,()=>{
    console.log("The port is running on 3000");
})