const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
  name: "help",
  description: "give description of all the commands",
  aliases: ["h"],
  usage: 'help',
  async run(message, args, bot) {

    const prefix = config.config.prefix
    const helpEmbed = new MessageEmbed()
      .setTitle(`help menu for: ${bot.user.tag}`)
      .setDescription(`\`[]\` - Required\n\`<>\` - Optional`)
      .addField('\`Core Commands:\`', `${prefix}ping - \`pings the bot\` \n${prefix}info - \`Show info about the bot (not botinfo)\``)
      .addField('\`Moderation Commands:\`', `${prefix}kick [member] <reason> - \`kicks a member\` \n${prefix}ban [member] <reason> - \`Bans a Member\``)
      .setColor('GREEN')
    message.channel.send(helpEmbed)

  },
};