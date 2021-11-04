import express from 'express'
const app = express()
app.use(
  express.urlencoded({ 
      extended: true
    })
    )     
    
    app.use(express.json())
    
const port = process.env.PORT || 3000
app.listen(port);
app.get('/', (req, res) => {
  res.send('Hello World!');
})


import dotenv from 'dotenv';
import Discord, {  Intents , MessageAttachment  } from 'discord.js';
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

client.on('messageCreate',(message)=>{
  if(message.content.split(' ')[0] === 'git'){
    
    if(message.content.split(' ')[1].toLowerCase() === 'set'){
      message.reply(`Setted Up to /${message.content.split(' ')[2]}`);
      route = message.content.split(' ')[2]
      webHook(route , message);
    }
    
    
  }  
  // CHnaged something
  
})//jd
function webHook(route , message){
  app.post(`/${route}`, function(req, res){
    const EmbdedMessage = {
      color: 2552552,
      description: `**Ref: [#${req.body.commits[0].id.slice(0, 7)}](${
        req.body.commits[0].url
      })** \n**Message: **${req.body.commits[0].message}\n**Time: **${new Date(
        req.body.commits[0].timestamp
      ).toString()}`,
      // description: `**Message**: ${req.body.commits[0].message} \n**req.body.commits[0] ID**: [${id}](${url}) \n**Timestamp**: ${timestamp}\n\n`,
      footer: {
        icon_url: `https://github.com/${req.body.commits[0].author.username}.png?size=200`,
        text: req.body.commits[0].author.username,
      },
    }
    // message.channel.send(`Name : ${req.body.pusher.name}`);
    // message.channel.send(`Messages : ${req.body.head_commit.message}`);
    // message.channel.send(`Time : ${req.body.head_commit.timestamp.split('T')[1].split('+')[0]}`);
    // message.channel.send(`Date : ${req.body.head_commit.timestamp.split('T')[0]}`);
    // message.channel.send(`____________________________________________________`);
    message.channel.send({ embeds: [EmbdedMessage]});
    console.log(EmbdedMessage)
    
    console.log(req.body);
  });
}
// Just testingg #2

client.login(process.env.TOKEN);

