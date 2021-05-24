module.exports = {
    name: 'addrole',
    description: 'addrole' ,
    callback:(message, args)=> {
        const targetUser = message.mentions.users.first()
      if (!targetUser) {
        message.reply('Please specify someone to give a role to.')
        return
      }
  
      args.shift()
  
      const roleName = args.join(' ')
      const { guild } = message

      var roleID1 = roleName.replace('<@&', '')
    var roleID2 = roleID1.replace('>', '')
  
      const role = guild.roles.cache.find((role) => {
        return (role.id === roleID2 || role.name === roleName)
      })
      if (!role) {
        message.reply(`There is no role with the name "${roleName}"`)
        return
      }
  
      const member = guild.members.cache.get(targetUser.id)
      member.roles.add(role)
  
      message.reply(`that user now has the "${roleName}" role`)
    },
};