const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true },(err)=>{
    if(!err){console.log('MongoDB connection succeeded!')}
});
require('./customer')
require('./cardInfo')
require('./cards')
require('./adminTools')