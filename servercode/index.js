import express from 'express'
const app = express()
app.use(
    express.urlencoded({
      extended: true
    })
  )

app.use(express.json())


app.listen(3000);

/// balh blah

import dotenv from 'dotenv';
import Discord, {  Intents } from 'discord.js';
dotenv.config();
const client = new Discord.Client({
    intents:[
       Intents.FLAGS.GUILDS,
       Intents.FLAGS.GUILD_MESSAGES,
    ]
});
const Channel = client.channels.cache.get('822334726890455053');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
   
    
});
let route;
let HelloInterval;
client.on('messageCreate',(message)=>{
    if(message.content.split(' ')[0] === 'git'){
        
      if(message.content.split(' ')[1].toLowerCase() === 'set'){
          message.reply(`Setted Up to /${message.content.split(' ')[2]}`);
          route = message.content.split(' ')[2]
         
        }

       
    }  

    
})

client.login(process.env.TOKEN);

  app.post(`/${route}`, function(req, res){
    // console.log(res.);
    message.channel.send(`${req.body}`);
    
    console.log(req.body);
  });

