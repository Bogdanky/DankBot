module.exports = {
	name: 'say',
	description: 'says' ,
	execute(message, args) {
		message.delete(0);
		if (message.content.includes('@here') || message.content.includes('@everyone')) { return;
			} else {
			{message.channel.send(`${message.author.username} said :` + " " + args.slice(0).join(" "))}
			}

	},
};