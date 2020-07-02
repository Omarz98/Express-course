const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('appName', 'Fazt Express tutorial');
app.set('port',3000);
app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
// app.all('/user', (req, res, next)=>{
//     console.log('Por aqui paso');
//     next();
// });
app.get('/',(req,res)=>{
    const data = [{name: 'john'},{name: 'joe'},{name: 'cameron'},{name:'rayan'}];
    res.render('index.ejs',{people: data});
})

app.get('/user',(req, res)=>{
    res.json({
        username:'ali',
        lastname:'bass'
    });
});

app.post('/user/:id', (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECEIVED');
});

app.delete('/user/:id', (req, res)=>{
    res.send(`User ${req.params.id} deleted`);
});

app.put('/user/:id', (req, res)=>{
    res.send(`User ${req.params.id} updated`);
});

app.use(express.static('public'));

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log('server on port ',app.get('port'));
});
