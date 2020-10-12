module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	execute(msg, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${msg.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		msg.channel.send(`First argument: ${args[0]}`);
	},
};
