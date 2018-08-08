const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم!');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('عليكم السلام!');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكو') {
    msg.reply('عليكو السلام!');
  }
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك!');
  }
});

client.on('message', msg => {
  if (msg.content === '!') {
    msg.reply('Welcome To CN CLan :hibiscus::beers: !!');
  }
});

client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('تيت!');
  }
});
client.on('message', msg => {
  if (msg.content === 'هاي') {
    msg.reply('هايات!');
  }
});






client.login(process.env.BOT_TOKEN6);
