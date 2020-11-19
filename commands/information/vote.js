const { MessageEmbed } = require("discord.js")
const links = require('../../config.json')

module.exports = {
    name: "vote",
    description: "vote for the bot",
    aliases: ["v"],
    usage: 'vote',
    async run(message, args, bot) {

        const voteEmbed = new MessageEmbed()
        .setTitle('Showing vote links')
        .addField('Paradise Bot List', `[Click](${links.config.bot_Lists.PBL})`)
        .addField('Top.gg', `[Click](${links.config.bot_Lists["Top.gg"]})`)
        .addField('Bot Designer List', `[Click](${links.config.bot_Lists.BDL})`)
        .setColor(links.config.embedColors.blue)

        message.channel.send(voteEmbed)

    }
}