module.exports = {
	name: 'server',
	cooldown: 10,
	description: 'Display info about this server.',
	execute(message) {
		message.delete(0);
		const Discord = require('discord.js');
		var embed = new Discord.RichEmbed()
		.addField( 'Server Name : ', message.guild.name ,true)
		.setColor("RANDOM")
        .setTitle("Server Info")
        .setDescription(`${message.guild.name}'s information`)
        .addField("Owner", `The owner of this server is ${message.guild.owner}`)
        .addField("Member Count", `This server has ${message.guild.memberCount} members`)
        .addField("Emoji Count", `This server has ${message.guild.emojis.size} emojis`)
        .addField("Roles Count", `This server has ${message.guild.roles.size} roles`)
		.setThumbnail(message.guild.iconURL)
		.setFooter(`Invoked by ${message.author.tag}`)
		.setTimestamp()
		message.channel.send(embed)
	},
};