import express from 'express';
import routes from './src/routes/backendRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise  = global.Promise;
const uri = 'mongodb+srv://jhu357:12345@chronicjic.y24nv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Chronic'
});

//body parser setup, may remove 
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
    res.send('node and exp server running on port' + PORT)    
);

app.listen(PORT, () =>
    console.log('ur server running on port' + PORT)
);

