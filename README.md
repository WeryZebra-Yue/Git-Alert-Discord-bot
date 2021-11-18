To use this discord bot in your own server , first of all you need to authorize the bot on your discord go to this link and authorize : https://discord.com/oauth2/authorize?client_id=905293035133345863&permissions=8&scope=bot%20applications.commands,
Bot will be on your discord 

now the github repo you wanna use on go to the settings of a repo then go to webhooks : 
Github-repo -> Settings -> Webhooks then click add webhook then add this link in your payload url :"https://gitaltert.herokuapp.com/{your repo name without space}"
change content type to application/Json and select "Just push event" then confirm it by cliking "Add webhook" then in discord commands are :

 :: git set {your repo name that you used in link}
 
 now bot will give reponse whenever someone push something.
 
 (NOTE : We are using free sever from Heroku so to use bot you just need to run website in background it won't take any load!)

