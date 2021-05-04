module.exports = {
	name: 'say',
	description: 'says' ,
	execute(message, args) {
		message.delete(0);
		{
		let slur = ['nig ', 'niggu', 'nigg', 'n1g', 'nigger', 'igga', 'kneeg', 'knig ', 'negg', 'negro' ,'fuck you', 'dumbfuck', 'asshole', 'cunt', 'fucker', 'fuck u'];
    
		if (message.content.includes('@here') || message.content.includes('@everyone') ||message.content.toLowerCase().includes(slur)) { return;
			} else {
			{message.channel.send(`${message.author.username} said :` + " " + args.slice(0).join(" "))}
			}

	}},
};