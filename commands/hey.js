module.exports = {
	name: 'hey',
	description: 'says' ,
	execute(message, args) {
// bonjour
let Hi = ['Hello', 'Hey', 'Bonjour', 'Hola', 'Namaste'];

let foundInTextHi = false;
for (var i in Hi) {
if(message.content.toLowerCase().includes(Hi[i].toLowerCase())) foundInTextHi = true;
}

if(foundInTextHi) {

message.channel.send("https://i.imgur.com/SbXyoQf.png")
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
    }}