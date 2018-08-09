const Discord = require('discord.js');
 const client = new Discord.Client();
 client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity('الكلام الي تبيه يطلع في حالة البوت', { type: 'WATCHING' }) }); 

client.on('message', message => {
	const prefix = '+'
(edited)
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **bc1** ' ,' **بث جماعي + للكل + مطور** ')
.addField('     **bc2**  ' ,' **بث جماعي + للكل + غير مطور** ')
.addField('     **bc3** ' , '**بث جماعي + للأونلاين + غير مطور + منشن للشخص**') 
.addField('     **bc4** ' , '**بث جماعي + للكل + غير مطور + منشن للشخص**') 
.addField('     **ping** ' ,' ** سرعة اتصال البوت**')
.addField('     **كت تويت** ' , '**هذي لعبة الكت تويت**')
.addField('     **هل تعلم ** ' ,' **  لعبة هل تعلم  ** ')
.addField('     **clear ** ' ,' **  لمسح الشات بدون رقم  ** ')
.addField('     **say ** ' ,' **  عشان يتكلم عنك  ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});





client.login(process.env.BOT_TOKEN5);
