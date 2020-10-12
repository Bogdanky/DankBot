module.exports = {
	name: 'boi',
	description: 'boii' ,
	execute(message, args) {
		message.delete(0);
		
		const Discord = require('discord.js');
        var embed = new Discord.RichEmbed()
		.setTitle("BOI")
		.setImage(`https://tenor.com/view/boi-emoji-upset-rage-angry-gif-11217263`)
		.setColor("#FF9900")
		.setTimestamp()
		.setFooter("BOIiiiiiiiiiiii" , `https://tenor.com/view/boi-emoji-upset-rage-angry-gif-11217263`);
	message.channel.send(embed)
	message.channel.send("Boy", { tts: true }).then(msg => msg.delete(001));
	},
};