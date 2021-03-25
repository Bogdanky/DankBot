module.exports = {
    name: 'coinflip',
    description: 'Flips a Coin for better decisions',
    execute(message, args) {
    let replies = [//the answer possibilities 
        "It's Heads",
        "It's Tails",
    ]
    //Decides what is the answer
    let result = Math.floor((Math.random() * replies.length));

    const Discord = require('discord.js');
        var embed = new Discord.RichEmbed()
        .addField("It's" , replies[result]) //Prints the answer
        .setColor("#FF9900")
        .setFooter(`Invoked by ${message.author.tag}`)
        .setThumbnail(`https://i.imgur.com/LkpAF29.gif`)
		.setTimestamp()
        message.channel.send(embed)
}}