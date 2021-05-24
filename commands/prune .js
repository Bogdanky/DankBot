module.exports = {
	name: 'prune',
	cooldown: 3,
	description: 'Prune up to 99 messages.',
	aliases: ['clear'],
	callback:(message, args)=> {
		message.delete(0);
		message.channel.send('Message(s) deleted sucssfully').then(msg => message.delete(5000));
		const amount = parseInt(args[0]) + 1;
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount + 1, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
}}