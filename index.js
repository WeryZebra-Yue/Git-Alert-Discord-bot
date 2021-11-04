const express = require('express');
const app = express()
app.use(
  express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())
const port = process.env.PORT || 8000;

app.set('port', port);
app.get('/', (req, res) => {
  res.send('Hello World!');
})
/// balh blah
const Discord = require('discord.js');
const {Intents , Client} = require('discord.js');
// const clients = new Client({ intents: [Intents.FLAGS.GUILDS] });
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({
  intents:[
    Intents.FLAGS.GUILDS,
    
  ]
});
client.login(process.env.TOKEN);
// const Channel = client.channels.cache.get('822334726890455053');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
   
});
let route; 

client.on('messageCreate',(message)=>{
    if(message.content.split(' ')[0] === 'git'){
        
      if(message.content.split(' ')[1].toLowerCase() === 'set'){
          message.reply(`Setted Up to /${message.content.split(' ')[2]}`);
          route = message.content.split(' ')[2]
         webHook(route , message);
        }
       
       
    }  

     
})
function webHook(route , message){
  app.post(`/${route}`, function(req, res){
    // console.log(res.);
    message.channel.send(`Name : ${req.body.pusher.name}`);
    message.channel.send(`Messages : ${req.body.head_commit.message}`);
    message.channel.send(`Time : ${req.body.head_commit.timestamp.split('T')[1].split('+')[0]}`);
    message.channel.send(`Date : ${req.body.head_commit.timestamp.split('T')[0]}`);
    message.channel.send(`____________________________________________________`);
    
    console.log(req.body);
  });
}
 // Just testingg


