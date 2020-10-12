module.exports = {
    name: '8ball',
    description: '8ball of fortune.',
    execute(message, args) {
        if(!args[0]) return message.channel.send('boi enter your thingy here (the question such as) enter b!8ball question...');
    let replies = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    const Discord = require('discord.js');
        var embed = new Discord.RichEmbed()
        .addField("Question" , args.slice(0).join(" "))
        .addField("Answer" , replies[result])
        .setAuthor(`${message.author.username}`)
        .setColor("#FF9900")
        .setFooter(`Invoked by ${message.author.tag}`)
		.setTimestamp()
        message.channel.send(embed)
}}