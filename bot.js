const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
ممكن تخش هنا بليز تنور
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝


                               [ https://discord.gg/4JaRmzB ] 
                               [ https://discord.gg/5Y8qCkx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})















client.login(process.env.BOT_TOKEN5);
