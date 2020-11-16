const { MessageEmbed } = require("discord.js");
const con = require('../../config.json')
const { Random } = require("something-random-on-discord")
const random = new Random();


module.exports = {
    name: "neko",
    description: "Gives a random neko",
    aliases: ["n"],
    usage: 'neko',
    async run(message, args, bot) {

        const wait = new MessageEmbed()
        .setDescription(`Getting your Neko`)
        .setColor(con.config.embedColors.blue)

     let data = await random.getNeko()

     const m = await message.channel.send(wait)

     setTimeout(() => {
        m.edit(data);
     }, 1300);

     }
}
