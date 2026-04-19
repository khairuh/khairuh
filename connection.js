const mongoose  = require('mongoose');

mongoose.connect("mongodb+srv://khairunnisa:khairunnisa@cluster0.upxyira.mongodb.net/ict20?appName=Cluster0")
.then(() => console.log('Connected!'))
.catch((err) => console.log( err));