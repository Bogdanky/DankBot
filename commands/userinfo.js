module.exports = {
  callback,
  name: "userinfo",
  description: "Displays information about a user",

  callback:(message, args )=> {
  

  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.MessageEmbed()
    .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
    .setDescription(`${user}`)
    .setColor(`RANDOM`) 
    .setThumbnail(user.displayAvatarURL())
    .addFields(
      {name: 'Nickaname', value :`${user.nickname !== null ? `${user.nickname}` : 'None'}`},
      {name: 'Status:', value: user.presence.status},
      {name : `In game `, value : `${user.presence.game ? user.presence.game.name : 'None'}`},
      {name: 'Created at:' , value : `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`},
      {name: 'Joined at:', value: `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`},
      //{name: 'Roles:', value:  user.roles ? user.roles.map(r => `${r}`).join(' | ') : ""},
      {name: 'ID:', value: `${user.id}`}
  )
    .setTimestamp();

    message.channel.send(embed);
}
}