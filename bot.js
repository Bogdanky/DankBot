const tmi = require('tmi.js');
const client = new tmi.Client({
	options: {
		debug: true,
		messagesLogLevel: "info"
	},
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'DankesttBott',
		password: 'oauth:xbbeh8tncwo0ny4ze7pozqh9zeoldm'
	},
	channels: ['Bogdanker', 'TrooperHX']
});
var answer = [
	'Perhaps',
	'As I see it, yes.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	'Don’t count on it.',
	'It is certain.',
	'It is decidedly so.',
	'Most likely.',
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Outlook good.',
	'Reply hazy, try again.',
	'Signs point to yes.',
	'Very doubtful.',
	'Without a doubt.',
	'Yes.',
	'Yes – definitely.',
	'You may rely on it.'
];
client.connect().catch(console.error);
// The order of the arguments here matter, it has to be channel, context, message, self
client.on('connected', (address, port) => {
    client.action('Bogdanker' , 'The Dank has awoken from his slumber')
    setInterval(() => {
        messageInterval();
    }, 100000);
});
var messages = [
	
]
function messageInterval() {
    client.say('Bogdanker' ,);
}

client.on('message', (channel, context, message, self) => {
	if (self) return;
	console.log(context);
	let User = (`${context.username}`)
	if (context["custom-reward-id"] === "8cc254df-6267-4015-91ce-7fc532620262") {
		client.say(channel, `@${context.username} , my answer is : ` + answer[Math.floor(Math.random() * answer.length)]);
	}
	if (message.toLocaleLowerCase().includes === "bald") {
		client.timeout("TrooperHX", `${context.username}`, 1, "No Bald Zone Here");
	}

});