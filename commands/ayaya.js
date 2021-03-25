module.exports = {
	name: 'ayaya',
	description: 'Jus AYAYA' ,
	execute(message, args) {
	if (message.author.id === '526472888761581588') {
		message.react(message.guild.emojis.get('824526764113920011'))
  .then(console.log)
  .catch(console.error);}
    }
}