bot.on('ready', () => {
    console.log('Borrko')
    bot.user.setGame(`${bot.guilds.size} servers`, 'https://twitch.tv/monstercat', {
        type: "streaming"
    })
})

bot.on("message", msg =>{

    let args =msg.content.substring(prefix.length).split(" ")

                    //commands//  

    switch (args[0]) { 

        case "bogo":
            msg.channel.send('Bogo')
            msg.react("🤔")
        break;

        case "say":
            msg.channel.send(args.slice(1).join(" "))
        break;

        case "avatar":
            msg.channel.send("Your avatar is" + msg.author.displayAvatarURL())
        break;

            case "cutemeter": 
            msg.react("❤️")
            replies = ['You Are Cute', 'You Are Very Cute','You Are Super Cute','OMG YOU ARE THE CUTEST','You are not cute sorry :(( but i still love you']
            let result = Math.floor((Math.random() * replies.length));

            repli = ['Cute', 'Very Cute','Super Cute','THE CUTEST OMFG',`not cute sorry :(( but i still love` +" " + args.slice(1).join(" ")]
            let resut = Math.floor((Math.random() * repli.length));
            if (args[1]) return  msg.channel.send( args.slice(1).join(" ")+ " " + "is" + " " +repli[resut]) 
            
        
            var embed = new Discord.RichEmbed()
                .setImage(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/heavy-black-heart_2764.png`)
                .setTitle('My cute-o-meter says')
                .setTitle(replies[result])
                .setColor("#FF9900")
            msg.channel.send(embed)
            break;

            case 'info':
            if (args[1] === 'version') {
                msg.channel.send('Version 0.1 (still in development)')
            } else {
                msg.channel.send('Invalid Args')}
                break;

            case "yomama":
                let relies = [
                    "Yo mama is so dumb, she thought Taco Bell was a Mexican phone company.",
                    "Yo mama is so fat, when she fell down it was hilarious. I wasn't laughing, but the floor was cracking up!",
                    "Yo mama's so stupid, she saw \"under 17 not admitted\" so she brought 16 of her friends.",
                    "Yo mama's so ugly, she scared the crap out of the toilet.",
                    ""]
            
                let resul = Math.floor((Math.random() * relies.length));
            
                msg.channel.send(relies[resul])
                break;


    }
    
})
    
bot.login("NjEwNzEyMzc1MzAxMTExODM5.XrAIHw.3xbeSkCnpM30vukDwHJJ4EDqVkI")// 