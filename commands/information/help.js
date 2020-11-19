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
      .setDescription(`\`[]\` - Required\n\`<>\` - Optional \n\`(disabled)\` - command is disabled and will get error`)
      .addField('\`Core Commands:\`', `${prefix}ping - \`pings the bot\` \n${prefix}info - \`Show info about the bot (not botinfo)\``)
      .addField('\`Moderation Commands:\`', `${prefix}kick [member] <reason> - \`kicks a member\` \n${prefix}ban [member] <reason> - \`Bans a Member\` \n${prefix}unban [id] - \`unbans the user that was banned\` \n${prefix}slowmode [number] - \`Sets the slowmode of the channel\``)
      .addField('\`Information Commands\`', `${prefix}uptime - \`Shows the uptime of the bot\` \n${prefix}botinfo - \`Returns the info of the bot\``)
      .addField('\`Util Commands\`', `${prefix}color [Hex Color] (disabled) - \`gets a color based on input\` \n${prefix}poll [message] - \`makes a new poll\``)
      .addField('\`Fun Commands\`', `${prefix}neko - \`Gets a random Neko\` \n${prefix}8ball - \`Says Random things when you say things\` \n${prefix}lenny - \`Gives a random lenny\` \n${prefix}dice - \`Rolls a dice\` \n${prefix}joke - \`returns a random joke\``)
      .addField('\`Economy\`', `${prefix}balance - \`Shows the current balance of the user\` \n${prefix}daily (can only claim once a day) - \`Gives $100 every 24h\``)
      .setColor('GREEN')
    message.channel.send(helpEmbed)

  },
};