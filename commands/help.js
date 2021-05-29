module.exports = {
	name: 'help',
	cooldown: 5,
	description: 'Shows a list of all commands.',
	callback:(message, args)=> {
        // Defines the config.json file.
        const config = require('../config.json');
        const Discord = require('discord.js');

        var client = message.client;

        // Gets an array from the client.commands collection, where all of your command information is stored inside of
		var commandsArray = Array.from(client.commands);

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Prefix: \`${config.prefix}\``);

        var string = '>>> '
        // Goes through every command in the array
        for (i = 0; i < commandsArray.length; i++) {
            var command = commandsArray[i][1];

            // Checks if the current command is the last one, if it is, then sends the embed
            if (i == commandsArray.length - 1) {
                embed.addField('Commands', string);
                message.channel.send(embed);
            }

            // Adds command information
            string += `\`${config.prefix}${command.name}\` - ${command.description}\n`
        }
	},
};