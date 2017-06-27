const express = require('express');
const app = express();

var messages = [{text: 'some text', owner: 'Tim'},{text:'another text', owner:'Dave'}];

app.get('/messages', (req,res) => {
    res.jason(messages);
})

app.listen (8000);