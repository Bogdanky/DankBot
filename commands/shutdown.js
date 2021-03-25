module.exports = {
	name: 'bye',
	description: 'Shutdowns the bot' ,
	execute(message, args) {
        if (message.author.id === '526472888761581588') {
            process.exit()
        }
	},
};