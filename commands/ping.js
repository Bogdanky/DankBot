module.exports = {
	name: 'ping',
	description: 'Displays Client ping' ,
	execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        message.channel.send("Pinging...").then(m =>{
            // The math thingy to calculate the user's ping
              var ping = m.createdTimestamp - message.createdTimestamp;
  
            // Basic embed
            var embed = new Discord.RichEmbed()
              .setAuthor(`Your ping is ${ping}`)
              .setColor("Your Color")
              
              // Then It Edits the message with the ping variable embed that you created
              m.edit(embed)})
        
    }};