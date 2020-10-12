const { send } = require('process');

module.exports = {
	name: 'twitch',
	cooldown: 10,
	description: 'Message tagging Twitch Stream Ping Role',
        execute(message, args) {
            message.delete(0);
            if (message.author.id === '526472888761581588'){
                message.channel.send((args[0]))
        const Discord = require('discord.js');
        var embed = new Discord.RichEmbed()
        .setTitle('Bogdan started streaming! (Click me!)')
        .setURL('https://twitch.tv/bogdanky')
        .setColor("#FF9900")
        .setThumbnail(`https://static-cdn.jtvnw.net/jtv_user_pictures/7be63a2b-1dc7-4bdf-a860-342fde4e55a4-profile_image-70x70.png`)
		.setTimestamp()
    message.channel.send(embed)
    }
},
};