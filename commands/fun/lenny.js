const { faces } = require('../../text/lennyFaces')
const con = require('../../config.json')

module.exports = {
    name: "lenny",
    description: "Gives a lenny for some reason",
    aliases: ["l"],
    usage: 'lenny',
    async run(message, args, bot) {

        const m = await message.channel.send(`Getting your lenny ${con.config.emotes.loading}`)

        setTimeout(() => {
            m.edit(faces[Math.floor(Math.random() * faces.length)])
        }, 1400);

    }
}