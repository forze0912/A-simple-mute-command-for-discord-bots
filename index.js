const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
 
 
const token = 'token';
 
const PREFIX = '!';
 
 
client.on('ready', () => {
    console.log('This bot is active!');
})

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    var role = ('muted role id')
 
    switch (args[0]) {
        case 'mute':
            var member  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

            
            if(!member) return  message.reply("I CANT FIND THE USER " + member)

 
            if(!role) return message.reply("Couldn't find the mute role.")
 
 
            var time = args[2];            
            if(!time){
                return message.reply("You didnt specify a time!");

            }
            if(message.member.roles.cache.has('mod role id')) 
            member.roles.add('muted role id');

            message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)
 
            setTimeout(function(){
                
                member.roles.remove('muted role id');
                console.log('muted role id')
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));
 
 
    
        break;
    }
 
 
});
 
            
                        
client.login('token');