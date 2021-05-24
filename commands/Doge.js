
module.exports = {
	name: 'dog',
	description: 'Shows a radom image of a dog' ,
  callback:(message, arguments, text)=>{
    const axios = require("axios");
    const Discord = require("discord.js");
    axios
      .get("https://api.thedogapi.com/v1/images/search")
      .then((res) => {
        // console.log('RES:', res.data[0].url)
        // message.channel.send(res.data[0].url)
        if (res.data[0].breeds == undefined) {breedName = 'Can\'t fetch breed'} 
        else {breedName = res.data[0].breeds[0].name}
        var catEmbed= new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setTitle("Doggos WidePeepohappy")
          .setDescription(`Breed: ${breedName}`)
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