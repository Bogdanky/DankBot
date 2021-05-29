
module.exports = {
	name: 'mc-server',
	description: 'Shows Status For A MC Server' ,
  callback:(message, args, text)=>{
      const util = require(`minecraft-server-util`)
      var port = "25565";
    if (arguments[1] != undefined) {
      port = arguments[1];
    }
    if(!args[0]) return message.channel.send("Please provide an existing ip")
    if(!args[1]) return message.channel.send("port where? (maybe it's 25565)")

    util.status(args[0], {port: parseInt(args[1])}).then((response)=>{
        console.log(response)
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
		.setColor("RANDOM")
        .setTitle(`Mc Server Status`)
        .addFields(
            {name: 'Server IP', value: response.host},
            {name: 'Online Players', value: response.onlinePlayers},
            {name: 'Max Players', value: response.maxPlayers},
            {name: 'Version', value: response.version}
        )
		message.channel.send(embed)
    })
    .catch((err) =>{
        message.channel.send("This serber doesn\'t exist sir");
        throw err;
    })
}
}