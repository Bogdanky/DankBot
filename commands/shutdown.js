module.exports = {
	name: 'bye',
	description: 'Shutdowns the bot' ,
	callback:(message, args)=> {
        if (message.author.id === '526472888761581588') {
            process.exit()
        }
	},
};