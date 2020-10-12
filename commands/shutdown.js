module.exports = {
	name: 'bye',
	description: 'says' ,
	execute(message, args) {
        if (message.author.id === '526472888761581588') {
            process.exit()
        }
	},
};