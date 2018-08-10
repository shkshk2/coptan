client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__~~CN 4 EveR bot~~__ By: Peery#7863
╭━━━┳━╮╱╭╮╭╮╱╭╮╱╱╭╮╭━━━╮
┃╭━╮┃┃╰╮┃┃┃┃╱┃┃╱╱┃┃┃╭━╮┃
┃┃╱╰┫╭╮╰╯┃┃╰━╯┣━━┫┃┃╰━╯┃
┃┃╱╭┫┃╰╮┃┃┃╭━╮┃┃━┫┃┃╭━━╯
┃╰━╯┃┃╱┃┃┃┃┃╱┃┃┃━┫╰┫┃
╰━━━┻╯╱╰━╯╰╯╱╰┻━━┻━┻╯
╔[❖════════════❖]╗
             Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ *kick <mention > ➾ kick member from server

 ❖ *clear ➾ clear chat ( not ready yet fixing)
 
 ❖ *mute < mention > ➾ mute member

 ❖ *unmute <mention> ➾ unmute member

 ❖ *ct <name> ➾ create channel

 ❖ *cv <name> create voice channel
  
 ❖ *bc <message> ➾ message all members in server


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ *roll <number> ➾ role 

❖ *date ➾ see date

❖ *member ➾ members info

❖ *ser-av ➾ server avatar

❖ *uptime ➾ to see uptime

❖ *invs ➾ server invite link

❖ *own ➾ bot owner

❖ *id ➾ your id

❖ *avatar ➾ your avatar account

❖ *help-en ➾ help by arabic

❖ *help-en ➾ help by english

❖ *ping ➾ to see ping

❖ *bot ➾ bot informations 

❖ *server ➾ server informations 

❖ *invite ➾ bot invite link

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "wlc"


==================================================================

Server support: https://discord.gg/uXvYbtB

==================================================================

bot invite link: NDc3MDU5MTk1NzIwNDMzNjg1.Dk-CEg.WWAUiRKpY144UvrUm-TqKa3tndE

==================================================================

`);

    }
});




client.login(process.env.BOT_TOKEN9);
