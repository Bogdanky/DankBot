const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


const client = new Discord.Client({ disableMentions: "everyone" });
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
    client.user.setStatus('Online')
    client.user.setPresence({
        game: {
            name: 'Use b!help',
            type: "Streaming",
            url: "https://twitch.tv/bogdanker"
	}})
});
client.on('message' , message => {
  let replies = ["Yo mama is so dumb, she thought Taco Bell was a Mexican phone company.", "Yo mama is so fat, when she fell down it was hilarious. I wasn't laughing, but the floor was cracking up!",
    "Yo mama's so stupid, she saw \"under 17 not admitted\" so she brought 16 of her friends.", "Yo mama's so ugly, she scared the crap out of the toilet.", 
    "Yo momma is like a brick, She's rough and flat on both sides and she always gets laid by Mexicans.", "Yo momma is so old, when she was young rainbows were black and white.", 
    "Yo Momma is like a bowling ball, she get's picked up, fingered, thrown in a gutter, and the bitch still comes back for more.", 
    "Yo Momma is like a bubble gum machine, a quarter a turn.", "Yo Momma is like a light switch, even a 3 year old can turn her on.", 
    "Yo Momma is so fat and stupid, that her waist is bigger than her I.Q.", 
    "Yo Momma breath is so disgustingly bad, that she needs Freshmints with batteries in it.", 
    "Yo Momma is so hairy, she's got afros on her nipples.", 
    "Yo Momma is like a Snickers bar - packed full with nuts.",
    "You gotta tell yo momma to stop changing lipstick color - I'm getting a freaking rainbow on my dick!",
    "Yo Momma is like a fast food restaurant - quick and easy!!!", 
    "Yo momma is like a pirate, there she blows.",  
    "Yo Momma is like a bus, she's big she doesn't smell very good and it's only a dollar to ride.", 
    "Yo Momma is like a shotgun, five cocks and she's loaded.", 
    "Yo momma is so little, when she went to meet Santa he said, \"Go back to work!\"", 
    "If pigs could fly, your mom would have wings.", "Yo momma's so fat and old when God said, \"Let there be light,\" he asked your mother to move out of the way.", 
    "Yo momma is so ashy, every time she rubs her arms it snows.", "Yo momma is so short, you can see her feet on her driver's license.",
    "Yo momma's so smelly, that when she spread her legs, I got seasick.", "Yo Momma's teeth are so yellow, that when she smiles, traffic slows down.",
    "Yo mama's armpit is so hairy it looks like she has Bigfoot in a headlock.", "Yo mama jokes are old and overused just like yo mama.",
    "Yo mamma is such dumbfuck her password needed 8 characters, so she typed \"Snow White and the 7 dwarfs.\"", "Yo mama's so broke that she couldn't even pay attention.",
    "Yo momma's breath smelled so bad when she walked by a clock it said, \"Tic Tac.\"", "The difference between yo momma and a washing machine is that When I drop a load in the washing machine, it doesn't follow me around for a week.",
    "Yo momma's so cross-eyed, she went to a movie and thought it was a double feature.", "Yo mama is so skinny she can dodge raindrops.",
    "Your mum is like the sun: big, round, and hard to look at.", "Yo mama is so small she can't even get high.", 
    "Your mama is so fat when she did a push up Earth went down.", "Your momma's so stupid when my car ran out of gas she came over and farted in the tank.", 
    "Yo momma is so skinny she can hula hoop with a Cheerio.", "Yo mama is so big she got hit by a bus and said, \"Hey, who threw a rock at me?\"", 
    "Yo mama's breath is so bad people look forward to her farts!", "Yo mama is so flat, that the last time she felt a breast was in a KFC bucket.",
    "Your momma's credit is so bad, the bank won't even lend her a pen to fill out a credit application.", "Yo mama is so bald when she takes a shower she gets brainwashed.",
    "Yo mama is like the sun: stare at her too long and you'll go blind.", "Yo mamma is so tall when she did a back flip, she kicked Jesus in the face.",
    "Your mom is so fat and so black when she goes into the ocean people say, \"Ahh! Oil spill!\"", "Yo momma is so gross, her shadow leaves a grease trail.",
    "Yo momma's so big, that when she stops walking, she has to put her hazard lights on.", "Yo mama is so dirty that when she takes a bath she becomes skinny.",
    "Yo mama's so fat Honey Boo Boo's mom tried to give her a massage and got lost.", "Yo momma is so bald, I can see what's on her mind.",
    "Your momma is so stupid, she tried to steal a free sample.", "Yo mama's breath stinks so bad she can't help but talk shit.",
    "Yo momma is so nasty when she went to take a shower the soap-on-a-rope hung itself.", 
    "Yo mama's so fat, when she skips a meal, the stock market drops.", "Yo mama's so fat, it took me two buses and a train to get to her good side.",
    "Yo mama's so fat, when she goes camping, the bears hide their food.", "Yo mama's so fat, if she buys a fur coat, a whole species will become extinct.",
    "Yo mama's so fat, she stepped on a scale and it said: \"To be continued.\"", "Yo mama's so fat, she was overthrown by a small militia group, and now she's known as the Republic of Yo Mama.",
    "Yo mama's so fat, she can't even jump to a conclusion.", "Yo mama's so stupid, she stared at a cup of orange juice for 12 hours because it said \"concentrate.\"",
    "Yo mama's so stupid, she put lipstick on her forehead to make up her mind.","Yo mama's so stupid, when I told her that she lost her mind, she went looking for it.",
    "Yo mama's so stupid, she went to the dentist to get a Bluetooth.", "Yo mama's so stupid, she took a ruler to bed to see how long she slept.",
    "Yo mama's so stupid, she got locked in the grocery store and starved to death.", "Yo mama's so ugly, she threw a boomerang and it refused to come back.",
    "Yo mama's so old, she walked out of a museum and the alarm went off.", "Yo mama's so ugly, her birth certificate is an apology letter.",
    "Yo mama's so poor, she chases the garbage truck with a grocery list.", "Yo mama so scary, the government moved Halloween to her birthday.",
    "Yo mama so old that when she was in school there was no history class.", "Yo mama so old, she knew Burger King while he was still a prince.",
    "Yo mama so silly, she put airbags on her computer in case it crashed.", "Yo mama so scary, she made One Direction go the other direction."
     ];
    
    
    let random = Math.floor(Math.random() * replies.length);

    let coinreplies = ["It's heads!", "It's Tails!"];
    
    let randomCoin = Math.floor(Math.random() * coinreplies.length);


    // Below are the commands without prefix

if(message.author.bot) return;




    if (message.content.toLowerCase().includes('ur mom')){
        message.channel.send("<@" + message.author.id + ">" +  " " + replies[random]);
    }
    


    if (message.content.toLowerCase().includes('bruh')){
        message.channel.send("<@" + message.author.id + ">" + " " + "Bruh");
    }

    if (message.content.toLowerCase().includes('your dad')){
        message.channel.send("<@" + message.author.id + ">" +  " " + 'Your dad is hot :flushed:');
    }
    
    
    
    if (message.content.toLowerCase().includes('<@!738778114670198786>')){
        message.channel.send('Whoms\'t hath summoned me?!');
    }
    
    if (message.content.toLowerCase().includes('lol')){
        message.channel.send("lmao"); 
    }
    if (message.content.toLowerCase().includes('lmao')){
        message.channel.send("**LMA**ri**O**"); 
    }
    
    if (message.content.toLowerCase().includes('epic')){
        message.channel.send("Epic indeed");
    }

    // Bot replying Adios 
    let Bye = ['bye', 'adios', 'goodnight', 'good night'];

    let foundInTextBye = false;
    for (var i in Bye) {
    if(message.content.toLowerCase().includes(Bye[i].toLowerCase())) foundInTextBye = true;
    }

    if(foundInTextBye) {
    
    message.channel.send("https://i.imgur.com/Qa94VkM.png")
    }
  
    
    // Racist slur filter 

    let slur = ['nig ', 'niggu', 'nigg', 'n1g', 'nigger', 'igga', 'kneeg', 'knig ', 'negg', 'negro'];

    let foundInTextSlur = false;
    for (var i in slur) {
    if(message.content.toLowerCase().includes(slur[i].toLowerCase())) foundInTextSlur = true;
    }

    if(foundInTextSlur) {
    message.delete();
    message.channel.send("<@" + message.author.id + ">" +  " " + " Do not use racial slurs here!")
    }

    // Bad words filter 

    let blacklisted = ['fuck you', 'dumbfuck', 'asshole', 'cunt', 'fucker', 'fuck u'];

    let foundInTextBL = false;
    for (var i in blacklisted) {
    if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInTextBL = true;
    }

    if(foundInTextBL) {
    message.delete();
    message.channel.send("<@" + message.author.id + ">" +  " " + " Watch your language!")
    }

   // for your mom

   if (message.content.toLowerCase().includes('hoe')){
         message.channel.send("<@" + message.author.id + ">" +  " " + "So many hoes in the world, your mom is the diamond one.");
    } 
    
    
    // bonjour
    let Hi = ['Hello', 'Hey', 'Bonjour', 'Hola', 'Namaste'];

    let foundInTextHi = false;
    for (var i in Hi) {
    if(message.content.toLowerCase().includes(Hi[i].toLowerCase())) foundInTextHi = true;
    }

    if(foundInTextHi) {
    
    message.channel.send("https://i.imgur.com/SbXyoQf.png")
    }
   
    /* old 
    if (message.content.toLowerCase().includes('bonjour')){
    message.channel.send("https://i.imgur.com/SbXyoQf.png");
    } 
   
    */
    
  

    // For bot replying compliment
    let qt = ['cute', 'cutie', 'qt', 'you\'re cute', 'sexy'];

    let foundInTextQt = false;
    for (var i in qt) {
      if(message.content.toLowerCase().includes(qt[i].toLowerCase())) foundInTextQt = true;
    }
    
    if(foundInTextQt) {
      message.channel.send("<@" + message.author.id + ">" +  " " + " No u :flushed:")
    }

    // Reactions 
   // if(message.content.toLowerCase().includes('hmm')) {
    //    message.react('<:hmmm:747321266649694209');
    //    message.channel.send('Hmmmmmmmmm');
    //  }
   //   if(message.content.toLowerCase().includes('ayaya')) 
   //   {
  //      message.react('<:AYAYA:761204100939251722');
   //   }
   //   if(message.author.id === '283559629068173312') {
   //     message.react('<:AYAYA:761204100939251722');
   //   }
   //   if (message.content.toLowerCase().includes('horny')){
   //     message.react('<a:bogBonk:837251515092697097>')
   //   }

   //   if(message.content.toLowerCase().includes('pog')) {
   //     message.react('<:PogChamp:754227410626674789');
   //   }
  //    if(message.content.toLowerCase().includes('poggers')) {
   //     message.react('<:PogChamp:754227410626674789');
   //   }


      //if (message.content.toLowerCase() === 'noice'){
         // message.channel.send('https://i.imgur.com/L97JFyI.png');
    //  }
     // if (message.content.toLowerCase() === 'ok'){
       //   message.channel.send('OK');
        
    //  }

})
client.on("guildCreate", guild => {
	// This event triggers when the bot joins a guild.
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  });

  client.on("guildDelete", guild => {
	// this event triggers when the bot is removed from a guild.
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
	client.user.setActivity(`Serving ${client.guilds.size} servers`);
  });

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	
    if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).callback(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
  
});


client.login(token);