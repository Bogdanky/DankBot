module.exports = {
	name: 'server',
	cooldown: 10,
	description: 'Display info about this server.',
	callback:(message)=> {
		message.delete(0);
		const Discord = require('discord.js');
		const {guild} = message
		const {owner} = guild
		var embed = new Discord.MessageEmbed()
		.addField( 'Server Name : ', message.guild.name ,true)
		.setColor("RANDOM")
        .setTitle("Server Info")
        .setDescription(`${message.guild.name}'s information`)
		.addFields(
            {name: 'Owner', value: `The owner of this server is ${owner}`},
            {name: 'Current Members', value: `This server has ${message.guild.memberCount} members`},
            {name: 'Locations', value: message.guild.region},
            {name: 'Created At', value: message.guild.createdAt.toLocaleString()},
			{name: 'Emoju Count', value: `This server has ${message.guild.emojis.size} emojis`},
            {name: 'Role Count', value: `This server has ${message.guild.roles.size} roles`}
        )
		.setThumbnail(message.guild.iconURL)
		.setFooter(`Invoked by ${message.author.tag}`)
		.setTimestamp()
		message.channel.send(embed)
	},
};