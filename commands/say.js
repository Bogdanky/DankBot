module.exports = {
	name: 'say',
	description: 'says' ,
	callback:(message, args)=> {
		message.delete(0);
		{
		let slur = ['nig ga','nig ', 'niggu', 'nigg', 'n1g', 'nigger', 'igga', 'kneeg', 'knig ', 'negg', 'negro' ,'fuck you', 'dumbfuck', 'asshole', 'cunt', 'fucker', 'fuck u'];
		
		let foundInTextSlur = false;
		for (var i in slur) {
		  if (message.content.toLowerCase().includes(slur[i].toLowerCase()))
			foundInTextSlur = true;
		}

		if (message.content.includes('@here') || message.content.includes('@everyone') ||foundInTextSlur) { return;
			message.delete(0);
			} else {
			{message.channel.send(`${message.author.username} said :` + " " + args.slice(0).join(" "),{ tts: true })}
			}

	}},
};