'use strict'; 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
const server = app.listen(3000, () => { console.log('Express server   listening on port %d in %s mode', server.address().port,   app.settings.env);});

app.post('/', (req, res) => { 
    let text = req.body.text;   
  if(!'yes') { // not a response
    res.send('I didn\'t get that! Are you going to trivia, citizen?');   return; 
  }

  let data = { 
    response_type: 'in_channel', // public to the channel 
    text: 'Great!', 
    attachments:[ { 
      image_url: 'https://gph.is/2adpNTu' 
    } ]}; 
  res.json(data);
});