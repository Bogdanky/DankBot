const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const embed = new Discord.RichEmbed()

const client = new Discord.Client({ disableMentions: "everyone" });
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
    client.user.setStatus('online')
    client.user.setPresence({
        game: {
            name: 'Use b!help',
            type: "Streaming",
            url: "https://twitch.tv/rammium"
	}})
});

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

	if (message.content.includes('PAPPY BOGGY')){
		message.delete();
		message.author.send(`He\'s not your daddy!`)
	}

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.login(token);