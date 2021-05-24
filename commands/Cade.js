
module.exports = {
	name: 'cat',
	description: 'Shows a radom image of a cat' ,
  callback:(message, arguments, text)=>{
    const axios = require("axios");
    const Discord = require("discord.js");
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        // console.log('RES:', res.data[0].url)
        // message.channel.send(res.data[0].url)
        var catEmbed= new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setTitle("Cat")
          .setAuthor(`Cats?`)
          .setImage(`${res.data[0].url}`)
          .setFooter(`Invoked by ${message.author.username}`);

        message.channel.send(catEmbed).catch(console.error);
      })
      // message.channel.send(catEmbed)

      .catch((err) => {
        console.error("ERR:", err);
      });
  },
};