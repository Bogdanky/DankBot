module.exports = {
	name: 'userinfo',
	cooldown: 5,
	description: 'Display info about yourself.',
	execute(message) {
		message.delete(0);
		const Discord = require('discord.js');
		const moment = require('moment');
		const joinedAt = moment.utc(message.member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')
		const createdAt = moment.utc(message.member.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')
		userinfo.mfa = message.client.user.mfaEnabled;
		var embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`${message.author.username}\'s info:`)
		.addField( 'User ID', `${message.author.id}` ,true)
		.addField('User Tag', `${message.author.tag}`,true)
		.addField("Status:", `${message.member.presence.status}`)
    	.addField("In Server", message.guild.name, true)
    	.addField("Game:", `${message.member.presence.game ? message.member.presence.game.name : 'None'}`)
		.addField('Roles:', message.member.roles.map(r => `${r}`).join(' | '), true)
		.addField('Joined at : ' , joinedAt ,)
		.addField('Account Created at :' , createdAt)
		.setThumbnail(message.author.avatarURL)
		.setFooter(`Invoked by ${message.author.tag}`)
		.setTimestamp()
		message.channel.send(embed)
	},
};