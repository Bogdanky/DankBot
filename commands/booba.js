module.exports = {
	name: 'booba',
	description: 'Shows a radom image of a booba' ,
  callback:(message, arguments, text)=>{

    const Discord = require('discord.js');
    
    let legends = [
      "Lady Dimitrescu",
      "PepeBOOBA",
      "BOOBA",
      "BOOOBA",
      "BOOBAGE",
      "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOBA"
    ];
    let legendThumbnails = [
      "https://cdn.discordapp.com/attachments/778963623737425960/843480191166578688/3x_24.gif",
      "https://cdn.discordapp.com/attachments/778963623737425960/843480195477798932/3x_8.png",
      "https://cdn.discordapp.com/attachments/778963623737425960/843480193901527120/3x_23.gif",
      "https://cdn.discordapp.com/attachments/778963623737425960/843480194555052062/3x_22.gif",
      "https://cdn.discordapp.com/attachments/778963623737425960/843480199362117652/3x_21.gif",
      "https://media.discordapp.net/attachments/211944696589582337/821215230461607966/boobawave.gif"
    ];
    let random2 = Math.floor(Math.random() * legends.length);
    let randomLegendThumbnail = legendThumbnails[random2];
    let randomLegend = legends[random2];
    const legendsEmbed = new Discord.MessageEmbed()
      .setColor("#f36a12")
      .setThumbnail(randomLegendThumbnail)
      .setTitle(`Random Booba of the day`)
      .setDescription(`Today's booba is **${randomLegend}**`)
      .setFooter("DinkDonk");

    message.channel.send(legendsEmbed);
  }

}
