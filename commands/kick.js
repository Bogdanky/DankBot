module.exports = {
    name: 'ping',
	description: 'Displays Client ping' ,
	execute(message, args) {
	if (message.content.startsWith("!kick")) {
			var member= message.mentions.members.first();
		member.kick().then((member) => {
			   message.channel.send(member.displayName + " has been successfully kicked ");
			}).catch(() => {
			  message.channel.send("Access Denied");
			});
	};
    }
}