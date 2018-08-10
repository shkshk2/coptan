const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "برفكس بوتك" //غير "برفكس بوتك" لي برفكس بوتك

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setActivity("Alpha Codes. | Mohamed",{type: 'WATCHING'})

});



client.login('token'); 





   client.on("message", message => { //سطر بدايه كل كود
    var prefix = "$"; //هنا غير $ لي برفكس بوتك
 if (message.content === "$help") { //وهنا كمان غير $ لي برفكس بوتك
         message.react('👌') //اذا كتبت الامر يحط رياكشن
     message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: '); //يكتب بلشات ان تم ارسال بلخاص
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
هنا الاوامر
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
   
   
   client.login(process.env.BOT_TOKEN9);
