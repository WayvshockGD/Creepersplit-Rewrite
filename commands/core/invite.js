const { MessageEmbed } = require("discord.js")
const con = require('../../config.json')

module.exports = {
    name: "invite",
    description: "Shows the invite of the bot",
    aliases: [],
    usage: 'invite',
    async run(message, args, bot) {

        const inEmbed = new MessageEmbed()
        .setTitle('Invite me here!')
        .setDescription(`Invite: [Click](https://discord.com/oauth2/authorize?client_id=${con.config.clientID}&permissions=8&scope=bot)`)
        .setColor(con.config.embedColors.blue)

        message.channel.send(inEmbed)

    }
}