const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {"id": 1, "name": "mitu", "email": 'mitu@gmail.com'},
    {"id": 2, "name": "litu", "email": 'litu@gmail.com'},
    {"id": 3, "name": "jitu", "email": 'jitu@gmail.com'}
];

app.get('/users', (req, res)=>{
    res.send(users);
})

app.get('/', (req, res)=>{
    res.send('Simple node server')
});
app.listen(port, ()=>{
    console.log(`Simple node is running on ${port}`)
});