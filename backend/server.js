const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 5000;
const todoRoutes = express.Router();
const app = express();

let Time = require('./model');



app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/timer', 
{useNewUrlParser:true,useUnifiedTopology: true});
    const connection = mongoose.connection;
    connection.once('open',()=>{
        console.log('MongoDb database connection establised successfully');
         
    })

todoRoutes.route('/').get((req,res)=>{
    Time.find((err,timers)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(timers);
        }
    });
});

todoRoutes.route('/:id').get((req,res)=>{
    let id = req.params.id;
    Timer.findById(id,(err,timer)=>{
        res.json(timer);
    });
});


todoRoutes.route('/add').post((req,res)=>{
    let timer = new Time(req.body);
    timer.save()
    .then(timer=>{
        res.status(200).json({'timer': 'user added successfully'});
    })
    .catch(err=>{
        res.status(400).send('adding new user failed');
    });
});



  
app.use('/todos',todoRoutes);

app.listen(PORT,()=>{
    console.log("Server is running on PORT: " + PORT);
})
