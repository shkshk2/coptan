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
╭━━━┳━╮╱╭╮╭╮╱╭╮╱╱╭╮╭━━━╮
┃╭━╮┃┃╰╮┃┃┃┃╱┃┃╱╱┃┃┃╭━╮┃
┃┃╱╰┫╭╮╰╯┃┃╰━╯┣━━┫┃┃╰━╯┃
┃┃╱╭┫┃╰╮┃┃┃╭━╮┃┃━┫┃┃╭━━╯
┃╰━╯┃┃╱┃┃┃┃┃╱┃┃┃━┫╰┫┃
╰━━━┻╯╱╰━╯╰╯╱╰┻━━┻━┻╯
CN BOT | By : @! CN |MrCopTan#1363

 $color   : لتغيير لونك في السيرفر
 $colors  : قائمة الألوان
 $id   : الهوية
  $profile  : الملف الشخصي
  $rep  : اعطاء نقاط تقييم
  $daily  : الحصول على الراتب اليومي
  $credits  : التحويل ومعرفة الرصيد
  $points   : النقاط((للمسابقات))
  $roll  :  القرعه
  $short  : أختصار الروابط 


 أوامر ادارة السيرفرات 
$mute
 $unmute
 $clear
  $points <MENTION> <POINTS> 
  !$id  : $id اعدادات الأمر
  $server  : معلومات السيرفر
  $roles  : معرفة رولات السيرفر

 اخرى 
  $invite  : لدعوة البوت الى سيرفرك
  $ping  : لمعرفة سرعة استجابة البوت في الوقت الحالي
  $support  : سيرفر الدعم الفني
`)
   message.author.sendEmbed(embed)
    
   }
   }); 


client.login(client.login(process.env.BOT_TOKEN9););
