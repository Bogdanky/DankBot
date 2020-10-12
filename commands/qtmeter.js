module.exports = {
    name: 'qtmeter',
    description: 'The best qt meter',
    execute(message, args) {
        message.delete(0);
    let replies = [
        "😳 Omg you are the cutest ",
        "😳 Sorry :( u no qt but i love u",
        "😳 ",
        "😳 Did you know, you qt?",
        "😳 You are big qt",
        "😳 Too cute for me ",
        ]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    const Discord = require('discord.js');
        var embed = new Discord.RichEmbed()
        .addField("My qtmeter said : " , replies[result])
        .setThumbnail(`https://i.imgur.com/br12vra.png`)
        .setAuthor(`${message.author.username}`)
        .setColor("#FF9900")
        .setFooter(`Invoked by ${message.author.tag}`)
		.setTimestamp()
        message.channel.send(embed)

}}